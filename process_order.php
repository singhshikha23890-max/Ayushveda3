<?php
header("Content-Type: application/json; charset=UTF-8");

// Optional: Paste your Google Apps Script Web App URL here to sync orders directly into your Google Sheet
$googleSheetScriptUrl = "https://script.google.com/macros/s/AKfycbyOQOci-xBoeXUl5MKsOGxzj1pD2_6fUd797u_W62EDwbOQF4wWANFOlZhfP0lteYQ/exec";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = isset($_POST["name"]) ? trim($_POST["name"]) : "";
    $phone = isset($_POST["phone"]) ? trim($_POST["phone"]) : "";
    $age = isset($_POST["age"]) ? trim($_POST["age"]) : "";
    $address = isset($_POST["address"]) ? trim($_POST["address"]) : "";
    $pincode = isset($_POST["pincode"]) ? trim($_POST["pincode"]) : "";

    if (empty($name) || empty($phone) || empty($address)) {
        echo json_encode([
            "status" => "error",
            "message" => "कृपया सभी आवश्यक जानकारी दर्ज करें।"
        ]);
        exit;
    }

    $orderData = [
        "id" => "ORD" . time() . rand(100, 999),
        "name" => $name,
        "phone" => "+91 " . substr($phone, -10),
        "age" => $age,
        "address" => $address,
        "pincode" => $pincode,
        "status" => "Verified COD Order",
        "timestamp" => date("Y-m-d H:i:s")
    ];

    // 1. Save order data to local orders.json file
    $file = __DIR__ . "/orders.json";
    $currentOrders = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
    if (!is_array($currentOrders)) $currentOrders = [];
    $currentOrders[] = $orderData;
    file_put_contents($file, json_encode($currentOrders, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

    // 2. Forward order data to Google Apps Script Web App if URL is provided
    if (!empty($googleSheetScriptUrl) && $googleSheetScriptUrl !== "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE") {
        try {
            $ch = curl_init($googleSheetScriptUrl);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($orderData));
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_exec($ch);
            curl_close($ch);
        } catch (Exception $e) {
            // Ignore cURL errors to prevent order blockage
        }
    }

    echo json_encode([
        "status" => "success",
        "message" => "ऑर्डर सफलतापूर्वक दर्ज हो गया!",
        "order" => $orderData
    ]);
    exit;
}

echo json_encode(["status" => "error", "message" => "Invalid request method"]);
