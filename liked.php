<!-- liked.php -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Liked Cats</title>
    <style>
        body {
            font-family: Arial;
            text-align: center;
            background: #fff0f5;
        }
        .cat {
            width: 300px;
            margin: 20px auto;
        }
        .cat img {
            width: 100%;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <h1>You liked these cats 🐱</h1>
    <div id="liked-cats"></div>

    <script>
        const liked = JSON.parse(sessionStorage.getItem('likedCats') || "[]");
        const container = document.getElementById('liked-cats');

        liked.forEach(id => {
            const div = document.createElement('div');
            div.className = 'cat';
            div.innerHTML = `<img src="https://cataas.com/cat/${id}" alt="Cat">`;
            container.appendChild(div);
        });
    </script>
</body>
</html>
