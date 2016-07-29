/* global Function */
(function($) {
    
    
    $.Jarosh = $.Jarosh || {};
    
    
    $.Jarosh.l10n = function(cname, lexem, value, param) {
        var r = value;

        cname = cname ? cname.split('-') : [''];

        var mod = (typeof Jarosh.l10n.LOC[cname[0]] !== 'undefined')
            ? Jarosh.l10n.LOC[cname[0]]
            : null;

        if (mod && cname.length>1)
            mod = (typeof mod[cname[1]] !== 'undefined')
                ? mod[cname[1]]
                : null;

        if (mod && typeof mod[lexem] !== 'undefined')
            r = mod[lexem];
        
        var get = function(fun, arg, map) {
            var r = arg;
            var f = Jarosh.l10n.LOC['-fun'][fun];
            for (var i=0,l=f.length; i<l; i++)
            {
                var c = f[i].replace( /x([^0-9]|$)/g, (!Array.isArray(arg)?arg:arg[0])+'$1' );
                var e = !Array.isArray(arg) ? ('var '+arg+' = param.'+arg+';') : '';
                if (Array.isArray(arg))
                {
                    for (var a=0; a<arg.length; a++)
                    {
                        c = c.replace(new RegExp('x'+(a+1),'g'),arg[a]);
                        e+= 'var '+arg[a]+' = param.'+arg[a]+';'
                    }
                }
                if (eval("(function() { eval(e); return ("+c+"); }())"))
                {
                    r = (typeof map[i] !== 'undefined')
                        ? ( !Array.isArray(map[i])
                            ? map[i]
                            : get( map[i][0].split(':')[0], map[i][0].split(':')[1], map[i].slice(1,map[i].length) )
                        )
                        : map[map.length-1];
                    break;
                }
            }
            return r;
        };
        
        var exe = function(out) {
            var tmp = '';
            for (var i=0, l=out.length; i<l; i++)
            {
                if (Array.isArray(out[i]))
                {
                    if (out[i].length===1)
                    {
                        tmp += param[out[i][0]];
                    }
                    else
                    {
                        var arg = out[i][0].split(':');
                        tmp += get(
                            arg[0],
                            arg.slice(1,arg.length),
                            out[i].slice(1,out[i].length)
                        );
                    }
                }
                else
                {
                    tmp += out[i];
                }
            }
            return tmp;
        };
        
        if (Array.isArray(r))
            r = exe(r);

        return r;
    };
    
    //
    //
    
    $.Jarosh.l10n.LOC = {};
    
} (this) );
