# Script de diagnostic complet
Write-Host "=== DIAGNOSTIC ENVIRONNEMENT ===" -ForegroundColor Green
Write-Host "Timestamp: $(Get-Date)" -ForegroundColor Cyan

# 1. Informations système
Write-Host "`n1. INFORMATIONS SYSTÈME" -ForegroundColor Yellow
Write-Host "OS: $([System.Environment]::OSVersion.VersionString)"
Write-Host "Architecture: $([System.Environment]::OSVersion.Platform)"
Write-Host "User: $([System.Environment]::UserName)"
Write-Host "Computer: $([System.Environment]::MachineName)"

# 2. Node.js et npm
Write-Host "`n2. NODE.JS ET NPM" -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "Node version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "Node.js non trouvé" -ForegroundColor Red
}

try {
    $npmVersion = npm --version
    Write-Host "npm version: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "npm non trouvé" -ForegroundColor Red
}

# 3. Réseau
Write-Host "`n3. RÉSEAU" -ForegroundColor Yellow
$networkAdapters = Get-NetAdapter | Where-Object {$_.Status -eq "Up"}
foreach ($adapter in $networkAdapters) {
    Write-Host "Adapter: $($adapter.Name) - $($adapter.InterfaceDescription)"
    $ipConfig = Get-NetIPAddress -InterfaceAlias $adapter.Name -AddressFamily IPv4 -ErrorAction SilentlyContinue
    if ($ipConfig) {
        Write-Host "  IP: $($ipConfig.IPAddress)"
    }
}

# 4. Ports
Write-Host "`n4. PORTS EN ÉCOUTE" -ForegroundColor Yellow
$ports = netstat -ano | findstr LISTENING | findstr ":300"
if ($ports) {
    Write-Host "Ports 300x en écoute:"
    Write-Host $ports
} else {
    Write-Host "Aucun port 300x en écoute"
}

# 5. Processus Node.js
Write-Host "`n5. PROCESSUS NODE.JS" -ForegroundColor Yellow
$nodeProcesses = Get-Process -Name "node" -ErrorAction SilentlyContinue
if ($nodeProcesses) {
    Write-Host "Processus Node.js actifs:"
    $nodeProcesses | Format-Table Id, ProcessName, StartTime, CPU
} else {
    Write-Host "Aucun processus Node.js actif"
}

# 6. Test de connectivité
Write-Host "`n6. TEST DE CONNECTIVITÉ" -ForegroundColor Yellow
$testUrls = @("http://127.0.0.1:3000", "http://localhost:3000", "http://192.168.2.177:3000")
foreach ($url in $testUrls) {
    try {
        $response = Invoke-WebRequest -Uri $url -TimeoutSec 5 -ErrorAction Stop
        Write-Host "✓ $url - Status: $($response.StatusCode)" -ForegroundColor Green
    } catch {
        Write-Host "✗ $url - Erreur: $($_.Exception.Message)" -ForegroundColor Red
    }
}

# 7. Variables d'environnement
Write-Host "`n7. VARIABLES D'ENVIRONNEMENT" -ForegroundColor Yellow
$envVars = @("PATH", "NODE_ENV", "NODE_OPTIONS", "HTTP_PROXY", "HTTPS_PROXY", "NO_PROXY")
foreach ($var in $envVars) {
    $value = [System.Environment]::GetEnvironmentVariable($var)
    if ($value) {
        Write-Host "$var = $value"
    }
}

# 8. Firewall
Write-Host "`n8. FIREWALL" -ForegroundColor Yellow
try {
    $firewallProfiles = Get-NetFirewallProfile
    foreach ($profile in $firewallProfiles) {
        Write-Host "$($profile.Name): $($profile.Enabled)"
    }
} catch {
    Write-Host "Impossible de vérifier le firewall"
}

Write-Host "`n=== DIAGNOSTIC TERMINÉ ===" -ForegroundColor Green