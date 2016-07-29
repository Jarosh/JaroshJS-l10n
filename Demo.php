<!DOCTYPE html>
<html>
    <head>
        <title>Jarosh-l10n</title>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <script type="text/javascript" src="Jarosh-l10n.js"></script>
        <script type="text/javascript">
            Jarosh.l10n.LOC = <?= json_encode(require('l10n/ru_RU.php')); ?>;
        </script>
    </head>
    <body></body>
    <script type="text/javascript">
        document.write('<pre>');
        
        document.writeln( Jarosh.l10n(null, 'welcome', null) );
        
        document.writeln(
            Jarosh.l10n(null, 'today', null)
            + ' '+(new Date()).getDate()+' '
            + Jarosh.l10n(null, 'month_'+('0'+((new Date()).getMonth()+1)).slice(-2), null, { ask: 'чего?' }).toLowerCase()
        );

        document.writeln( Jarosh.l10n('TestPage', 'unexisting_key', 'Oops! Not localized!') );
        
        var loc = Jarosh.l10n;
        
        document.writeln( loc('TestPage', 'smb_wrote_you', null, { weight:45, height: 180, num:40 }) );
        document.writeln( loc('TestPage', 'smb_wrote_you', null, { weight:78, height: 170, num:21 }) );
        document.writeln( loc('TestPage', 'smb_wrote_you', null, { age: 25, gender:'Male', weight:60, height: 170, num:4 }) );
        document.writeln( loc('TestPage', 'smb_wrote_you', null, { age: 15, gender:'Female', weight:45, height: 155, num:101 }) );
        document.writeln( loc('TestPage', 'smb_wrote_you', null, { age: 16, gender:'Male', weight:110, height: 180, num:6 }) );
        document.writeln( loc('TestPage', 'smb_wrote_you', null, { age: 35, gender:'Female', weight:70, height: 170, num:21 }) );
        document.writeln( loc('TestPage', 'smb_wrote_you', null, { age: 3, gender:'Male', weight:20, height: 70, num:40 }) );
        document.writeln( loc('TestPage', 'smb_wrote_you', null, { age: 5, gender:'Female', weight:35, height: 110, num:4 }) );
        document.writeln( loc('TestPage', 'smb_wrote_you', null, { age: 82, gender:'Male', weight:55, height: 168, num:101 }) );
        document.writeln( loc('TestPage', 'smb_wrote_you', null, { age: 10, gender:'Female', weight:36, height: 147, num:6 }) );
        document.writeln( loc('TestPage', 'smb_wrote_you', null, { gender:'Male', weight:120, height: 190, num:21 }) );
        document.writeln( loc('TestPage', 'smb_wrote_you', null, { gender:'Female', weight:70, height: 157, num:40 }) );
    
    </script>
</html>