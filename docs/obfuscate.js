(new Function((function (s) {
			var d = {},
			a = (s + "").split(""),
			cc = a[0],
			o = cc,
			r = [cc],
			c = 256,
			p;
			for (var i = 1; i < a.length; i++) {
				var cd = a[i].charCodeAt(0);
				if (cd < 256) {
					p = a[i];
				} else {
					p = d[cd] ? d[cd] : (o + cc);
				}
				r.push(p);
				cc = p.charAt(0);
				d[c] = o + cc;
				c++;
				o = p;
			}
			return r.join("");
		})(decodeURIComponent(escape(atob(""))))))();
		
		
		
		btoa(unescape(encodeURIComponent("")))