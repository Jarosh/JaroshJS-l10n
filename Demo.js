function demo(loc) {
    if (typeof loc != 'undefined')
        Jarosh.l10n.LOC = LOC[loc];
    
    var out = '';
    
    out += '<p style="font-weight:bold;">' + Jarosh.l10n(null, 'welcome', null) + '</p>';

    out += '<p style="font-weight:bold;">'
        + Jarosh.l10n(null, 'today', null, {
            d : (new Date()).getDate(),
            m : Jarosh.l10n(null, 'month_'+('0'+((new Date()).getMonth()+1)).slice(-2), null, { ask: 'чего?' })
        })
        + '</p>';

    out += '<p style="font-style:italic;">' + Jarosh.l10n('TestPage', 'unexisting_key', 'Oops! Not localized!') + '</p>';

    out += '<hr/>';
    
    // setting up a short alias...
    var loc = Jarosh.l10n;

    out += '<p>' + loc('TestPage', 'smb_wrote_you', null, { weight:45, height: 180, num:1 }) + '</p>';
    out += '<p>' + loc('TestPage', 'smb_wrote_you', null, { weight:78, height: 170, num:21 }) + '</p>';
    out += '<p>' + loc('TestPage', 'smb_wrote_you', null, { age: 25, gender:'Male', weight:60, height: 170, num:4 }) + '</p>';
    out += '<p>' + loc('TestPage', 'smb_wrote_you', null, { age: 15, gender:'Female', weight:45, height: 155, num:101 }) + '</p>';
    out += '<p>' + loc('TestPage', 'smb_wrote_you', null, { age: 16, gender:'Male', weight:110, height: 180, num:6 }) + '</p>';
    out += '<p>' + loc('TestPage', 'smb_wrote_you', null, { age: 35, gender:'Female', weight:70, height: 170, num:21 }) + '</p>';
    out += '<p>' + loc('TestPage', 'smb_wrote_you', null, { age: 3, gender:'Male', weight:20, height: 70, num:40 }) + '</p>';
    out += '<p>' + loc('TestPage', 'smb_wrote_you', null, { age: 5, gender:'Female', weight:35, height: 110, num:4 }) + '</p>';
    out += '<p>' + loc('TestPage', 'smb_wrote_you', null, { age: 82, gender:'Male', weight:55, height: 168, num:101 }) + '</p>';
    out += '<p>' + loc('TestPage', 'smb_wrote_you', null, { age: 10, gender:'Female', weight:36, height: 147, num:6 }) + '</p>';
    out += '<p>' + loc('TestPage', 'smb_wrote_you', null, { gender:'Male', weight:120, height: 190, num:21 }) + '</p>';
    out += '<p>' + loc('TestPage', 'smb_wrote_you', null, { gender:'Female', weight:70, height: 157, num:40 }) + '</p>';
    
    document.getElementById('demo').innerHTML = out;
}