<!DOCTYPE HTML>
<html>
<head><title>Hello world!</title>
</head>
<body>
<p>This example calls a function which performs a calculation, and returns the result:</p>

<p id="demo"></p>

<script>
function myFunction(a, b) {
    return a * b;
}
document.getElementById("demo").innerHTML = myFunction(4, 4);
</script>
</body>

</html> 