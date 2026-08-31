<?php
header("Content-Type: application/json; charset=UTF-8");

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

    // Save order data to orders.json file
    $file = __DIR__ . "/orders.json";
    $currentOrders = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
    if (!is_array($currentOrders)) $currentOrders = [];
    $currentOrders[] = $orderData;
    file_put_contents($file, json_encode($currentOrders, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

    echo json_encode([
        "status" => "success",
        "message" => "ऑर्डर सफलतापूर्वक दर्ज हो गया!",
        "order" => $orderData
    ]);
    exit;
}

echo json_encode(["status" => "error", "message" => "Invalid request method"]);
