function localtunnel {
  lt -s odufnikdirvo --port 5001
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done