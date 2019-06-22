<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>{{title}}</title>
    <style>
    body{
        margin:30px;
    }
    a{
        display:block!important;
        font-size:25px!important;
    }
    </style>
</head>
<body>
{{#each files}}
<a href={{../dir}}/{{this}}>{{this}}</a>
{{/each}}
</body>
</html>