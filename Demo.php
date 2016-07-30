<!DOCTYPE html>
<html>
    <head>
        <title>Jarosh-l10n</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script type="text/javascript" src="Jarosh-l10n.js"></script>
        <script type="text/javascript">
            Jarosh.l10n.LOC = <?= json_encode(require('Demo-l10n/es_ES.php')); ?>;
        </script>
        <script type="text/javascript" src="Demo.js"></script>
    </head>
    <body onLoad="demo();"></body>
</html>
