(window["webpackJsonppurple-react-pro"]=window["webpackJsonppurple-react-pro"]||[]).push([[59],{1090:function(e,n,o){"use strict";o.r(n);var r=function(e){return e},t=function(e){if(null==e)return r;var n,o,t=e.scale[0],a=e.scale[1],i=e.translate[0],s=e.translate[1];return function(e,r){r||(n=o=0);var c=2,u=e.length,l=new Array(u);for(l[0]=(n+=e[0])*t+i,l[1]=(o+=e[1])*a+s;c<u;)l[c]=e[c],++c;return l}},a=function(e){var n,o=t(e.transform),r=1/0,a=r,i=-r,s=-r;function c(e){(e=o(e))[0]<r&&(r=e[0]),e[0]>i&&(i=e[0]),e[1]<a&&(a=e[1]),e[1]>s&&(s=e[1])}function u(e){switch(e.type){case"GeometryCollection":e.geometries.forEach(u);break;case"Point":c(e.coordinates);break;case"MultiPoint":e.coordinates.forEach(c)}}for(n in e.arcs.forEach((function(e){for(var n,t=-1,c=e.length;++t<c;)(n=o(e[t],t))[0]<r&&(r=n[0]),n[0]>i&&(i=n[0]),n[1]<a&&(a=n[1]),n[1]>s&&(s=n[1])})),e.objects)u(e.objects[n]);return[r,a,i,s]},i=function(e,n){return"string"===typeof n&&(n=e.objects[n]),"GeometryCollection"===n.type?{type:"FeatureCollection",features:n.geometries.map((function(n){return s(e,n)}))}:s(e,n)};function s(e,n){var o=n.id,r=n.bbox,t=null==n.properties?{}:n.properties,a=c(e,n);return null==o&&null==r?{type:"Feature",properties:t,geometry:a}:null==r?{type:"Feature",id:o,properties:t,geometry:a}:{type:"Feature",id:o,bbox:r,properties:t,geometry:a}}function c(e,n){var o=t(e.transform),r=e.arcs;function a(e,n){n.length&&n.pop();for(var t=r[e<0?~e:e],a=0,i=t.length;a<i;++a)n.push(o(t[a],a));e<0&&function(e,n){for(var o,r=e.length,t=r-n;t<--r;)o=e[t],e[t++]=e[r],e[r]=o}(n,i)}function i(e){return o(e)}function s(e){for(var n=[],o=0,r=e.length;o<r;++o)a(e[o],n);return n.length<2&&n.push(n[0]),n}function c(e){for(var n=s(e);n.length<4;)n.push(n[0]);return n}function u(e){return e.map(c)}return function e(n){var o,r=n.type;switch(r){case"GeometryCollection":return{type:r,geometries:n.geometries.map(e)};case"Point":o=i(n.coordinates);break;case"MultiPoint":o=n.coordinates.map(i);break;case"LineString":o=s(n.arcs);break;case"MultiLineString":o=n.arcs.map(s);break;case"Polygon":o=u(n.arcs);break;case"MultiPolygon":o=n.arcs.map(u);break;default:return null}return{type:r,coordinates:o}}(n)}var u=function(e,n){var o={},r={},t={},a=[],i=-1;function s(e,n){for(var r in e){var t=e[r];delete n[t.start],delete t.start,delete t.end,t.forEach((function(e){o[e<0?~e:e]=1})),a.push(t)}}return n.forEach((function(o,r){var t,a=e.arcs[o<0?~o:o];a.length<3&&!a[1][0]&&!a[1][1]&&(t=n[++i],n[i]=o,n[r]=t)})),n.forEach((function(n){var o,a,i=function(n){var o,r=e.arcs[n<0?~n:n],t=r[0];e.transform?(o=[0,0],r.forEach((function(e){o[0]+=e[0],o[1]+=e[1]}))):o=r[r.length-1];return n<0?[o,t]:[t,o]}(n),s=i[0],c=i[1];if(o=t[s])if(delete t[o.end],o.push(n),o.end=c,a=r[c]){delete r[a.start];var u=a===o?o:o.concat(a);r[u.start=o.start]=t[u.end=a.end]=u}else r[o.start]=t[o.end]=o;else if(o=r[c])if(delete r[o.start],o.unshift(n),o.start=s,a=t[s]){delete t[a.end];var l=a===o?o:a.concat(o);r[l.start=a.start]=t[l.end=o.end]=l}else r[o.start]=t[o.end]=o;else r[(o=[n]).start=s]=t[o.end=c]=o})),s(t,r),s(r,t),n.forEach((function(e){o[e<0?~e:e]||a.push([e])})),a},l=function(e){return c(e,f.apply(this,arguments))};function f(e,n,o){var r,t,a;if(arguments.length>1)r=p(e,n,o);else for(t=0,r=new Array(a=e.arcs.length);t<a;++t)r[t]=t;return{type:"MultiLineString",arcs:u(e,r)}}function p(e,n,o){var r,t=[],a=[];function i(e){var n=e<0?~e:e;(a[n]||(a[n]=[])).push({i:e,g:r})}function s(e){e.forEach(i)}function c(e){e.forEach(s)}return function e(n){switch(r=n,n.type){case"GeometryCollection":n.geometries.forEach(e);break;case"LineString":s(n.arcs);break;case"MultiLineString":case"Polygon":c(n.arcs);break;case"MultiPolygon":!function(e){e.forEach(c)}(n.arcs)}}(n),a.forEach(null==o?function(e){t.push(e[0].i)}:function(e){o(e[0].g,e[e.length-1].g)&&t.push(e[0].i)}),t}var d=function(e){return c(e,m.apply(this,arguments))};function m(e,n){var o={},r=[],t=[];function a(e){e.forEach((function(n){n.forEach((function(n){(o[n=n<0?~n:n]||(o[n]=[])).push(e)}))})),r.push(e)}function i(n){return function(e){for(var n,o=-1,r=e.length,t=e[r-1],a=0;++o<r;)n=t,t=e[o],a+=n[0]*t[1]-n[1]*t[0];return Math.abs(a)}(c(e,{type:"Polygon",arcs:[n]}).coordinates[0])}return n.forEach((function e(n){switch(n.type){case"GeometryCollection":n.geometries.forEach(e);break;case"Polygon":a(n.arcs);break;case"MultiPolygon":n.arcs.forEach(a)}})),r.forEach((function(e){if(!e._){var n=[],r=[e];for(e._=1,t.push(n);e=r.pop();)n.push(e),e.forEach((function(e){e.forEach((function(e){o[e<0?~e:e].forEach((function(e){e._||(e._=1,r.push(e))}))}))}))}})),r.forEach((function(e){delete e._})),{type:"MultiPolygon",arcs:t.map((function(n){var r,t=[];if(n.forEach((function(e){e.forEach((function(e){e.forEach((function(e){o[e<0?~e:e].length<2&&t.push(e)}))}))})),(r=(t=u(e,t)).length)>1)for(var a,s,c=1,l=i(t[0]);c<r;++c)(a=i(t[c]))>l&&(s=t[0],t[0]=t[c],t[c]=s,l=a);return t})).filter((function(e){return e.length>0}))}}var v=function(e,n){for(var o=0,r=e.length;o<r;){var t=o+r>>>1;e[t]<n?o=t+1:r=t}return o},h=function(e){var n={},o=e.map((function(){return[]}));function r(e,o){e.forEach((function(e){e<0&&(e=~e);var r=n[e];r?r.push(o):n[e]=[o]}))}function t(e,n){e.forEach((function(e){r(e,n)}))}var a={LineString:r,MultiLineString:t,Polygon:t,MultiPolygon:function(e,n){e.forEach((function(e){t(e,n)}))}};for(var i in e.forEach((function e(n,o){"GeometryCollection"===n.type?n.geometries.forEach((function(n){e(n,o)})):n.type in a&&a[n.type](n.arcs,o)})),n)for(var s=n[i],c=s.length,u=0;u<c;++u)for(var l=u+1;l<c;++l){var f,p=s[u],d=s[l];(f=o[p])[i=v(f,d)]!==d&&f.splice(i,0,d),(f=o[d])[i=v(f,p)]!==p&&f.splice(i,0,p)}return o},g=function(e){if(null==e)return r;var n,o,t=e.scale[0],a=e.scale[1],i=e.translate[0],s=e.translate[1];return function(e,r){r||(n=o=0);var c=2,u=e.length,l=new Array(u),f=Math.round((e[0]-i)/t),p=Math.round((e[1]-s)/a);for(l[0]=f-n,n=f,l[1]=p-o,o=p;c<u;)l[c]=e[c],++c;return l}},y=function(e,n){if(e.transform)throw new Error("already quantized");if(n&&n.scale)c=e.bbox;else{if(!((o=Math.floor(n))>=2))throw new Error("n must be \u22652");var o,r=(c=e.bbox||a(e))[0],t=c[1],i=c[2],s=c[3];n={scale:[i-r?(i-r)/(o-1):1,s-t?(s-t)/(o-1):1],translate:[r,t]}}var c,u,l=g(n),f=e.objects,p={};function d(e){return l(e)}function m(e){var n;switch(e.type){case"GeometryCollection":n={type:"GeometryCollection",geometries:e.geometries.map(m)};break;case"Point":n={type:"Point",coordinates:d(e.coordinates)};break;case"MultiPoint":n={type:"MultiPoint",coordinates:e.coordinates.map(d)};break;default:return e}return null!=e.id&&(n.id=e.id),null!=e.bbox&&(n.bbox=e.bbox),null!=e.properties&&(n.properties=e.properties),n}for(u in f)p[u]=m(f[u]);return{type:"Topology",bbox:c,transform:n,objects:p,arcs:e.arcs.map((function(e){var n,o=0,r=1,t=e.length,a=new Array(t);for(a[0]=l(e[0],0);++o<t;)((n=l(e[o],o))[0]||n[1])&&(a[r++]=n);return 1===r&&(a[r++]=[0,0]),a.length=r,a}))}};o.d(n,"bbox",(function(){return a})),o.d(n,"feature",(function(){return i})),o.d(n,"mesh",(function(){return l})),o.d(n,"meshArcs",(function(){return f})),o.d(n,"merge",(function(){return d})),o.d(n,"mergeArcs",(function(){return m})),o.d(n,"neighbors",(function(){return h})),o.d(n,"quantize",(function(){return y})),o.d(n,"transform",(function(){return t})),o.d(n,"untransform",(function(){return g}))},917:function(e,n,o){!function(e,n,o,r,t){"use strict";var a="default"in n?n.default:n;o=o&&o.hasOwnProperty("default")?o.default:o;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},s=function(e,n){var o={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r]);return o},c=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var o=[],r=!0,t=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(o.push(i.value),!n||o.length!==n);r=!0);}catch(e){t=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(t)throw a}}return o}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},u=n.createContext(),l={geoEqualEarth:r.geoEqualEarth,geoMercator:r.geoMercator,geoTransverseMercator:r.geoTransverseMercator,geoAlbers:r.geoAlbers,geoAlbersUsa:r.geoAlbersUsa,geoAzimuthalEqualArea:r.geoAzimuthalEqualArea,geoAzimuthalEquidistant:r.geoAzimuthalEquidistant,geoOrthographic:r.geoOrthographic,geoConicConformal:r.geoConicConformal,geoConicEqualArea:r.geoConicEqualArea,geoConicEquidistant:r.geoConicEquidistant},f=function(e){var o=e.width,t=e.height,c=e.projection,f=e.projectionConfig,p=s(e,["width","height","projection","projectionConfig"]),d=f.center||[],m=f.rotate||[],v=f.parallels||[],h=f.scale||null,g=n.useMemo((function(){var e=function(e){var n=e.projectionConfig,o=void 0===n?{}:n,r=e.projection,t=void 0===r?"geoEqualEarth":r,a=e.width,i=void 0===a?800:a,s=e.height,c=void 0===s?500:s;if("function"==typeof t)return t;var u=l[t]().translate([i/2,c/2]);return[u.center?"center":null,u.rotate?"rotate":null,u.scale?"scale":null,u.parallels?"parallels":null].forEach((function(e){e&&(u=u[e](o[e]||u[e]()))})),u}({projectionConfig:f,projection:c,width:o,height:t});return{width:o,height:t,projection:e,path:r.geoPath().projection(e)}}),[o,t,c,d[0],d[1],m[0],m[1],m[2],v[0],v[1],h]);return a.createElement(u.Provider,i({value:g},p))};f.propTypes={width:o.number,height:o.number,projection:o.oneOfType([o.string,o.func]),projectionConfig:o.object};var p=function(e){var n=e.width,o=void 0===n?800:n,r=e.height,t=void 0===r?600:r,c=e.projection,u=void 0===c?"geoEqualEarth":c,l=e.projectionConfig,p=void 0===l?{}:l,d=e.className,m=void 0===d?"":d,v=s(e,["width","height","projection","projectionConfig","className"]);return a.createElement(f,{width:o,height:t,projection:u,projectionConfig:p},a.createElement("svg",i({viewBox:"0 0 "+o+" "+t,className:"rsm-svg "+m},v)))};function d(e,n){if(Array.isArray(e))return n?n(e):e;var o=t.feature(e,e.objects[Object.keys(e.objects)[0]]).features;return n?n(o):o}function m(e){var o=e.geography,r=e.parseGeographies,t=n.useContext(u).path,a=n.useState(),s=c(a,2),l=s[0],f=s[1];return n.useEffect((function(){var e;"undefined"!=typeof window&&("string"==typeof o?(e=o,fetch(e).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).catch((function(e){console.log("There was a problem when fetching the data: ",e)}))).then((function(e){e&&f(d(e,r))})):f(d(o,r)))}),[o]),{geographies:n.useMemo((function(){return function(e,n){return e?e.map((function(e,o){return i({},e,{rsmKey:"geo-"+o,svgPath:n(e)})})):[]}(l,t)}),[l,t])}}p.propTypes={width:o.number,height:o.number,projection:o.oneOfType([o.string,o.func]),projectionConfig:o.object,className:o.string};var v=function(e){var o=e.geography,r=e.children,t=e.parseGeographies,c=e.className,l=void 0===c?"":c,f=s(e,["geography","children","parseGeographies","className"]),p=n.useContext(u),d=p.path,v=p.projection,h=m({geography:o,parseGeographies:t}).geographies;return a.createElement("g",i({className:"rsm-geographies "+l},f),h&&h.length>0&&r({geographies:h,path:d,projection:v}))};v.propTypes={geography:o.oneOfType([o.string,o.object,o.array]),children:o.func,parseGeographies:o.func,className:o.string};var h=function(e){var o=e.geography,r=e.onMouseEnter,t=e.onMouseLeave,u=e.onMouseDown,l=e.onMouseUp,f=e.onFocus,p=e.onBlur,d=e.style,m=void 0===d?{}:d,v=e.className,h=void 0===v?"":v,g=s(e,["geography","onMouseEnter","onMouseLeave","onMouseDown","onMouseUp","onFocus","onBlur","style","className"]),y=n.useState(!1),E=c(y,2),b=E[0],M=E[1],w=n.useState(!1),j=c(w,2),x=j[0],k=j[1];return a.createElement("path",i({role:"geography",tabIndex:"0",className:"rsm-geography "+h,d:o.svgPath,onMouseEnter:function(e){k(!0),r&&r(e)},onMouseLeave:function(e){k(!1),b&&M(!1),t&&t(e)},onFocus:function(e){k(!0),f&&f(e)},onBlur:function(e){k(!1),b&&M(!1),p&&p(e)},onMouseDown:function(e){M(!0),u&&u(e)},onMouseUp:function(e){M(!1),l&&l(e)},style:m[b||x?b?"pressed":"hover":"default"]},g))};h.propTypes={geography:o.object,onMouseEnter:o.func,onMouseLeave:o.func,onMouseDown:o.func,onMouseUp:o.func,onFocus:o.func,onBlur:o.func,style:o.object,className:o.string};var g=n.memo(h),y=function(e){var o=e.fill,t=void 0===o?"transparent":o,c=e.stroke,l=void 0===c?"currentcolor":c,f=e.step,p=void 0===f?[10,10]:f,d=e.className,m=void 0===d?"":d,v=s(e,["fill","stroke","step","className"]),h=n.useContext(u).path;return a.createElement("path",i({d:h(r.geoGraticule().step(p)()),fill:t,stroke:l,className:"rsm-graticule "+m},v))};y.propTypes={fill:o.string,stroke:o.string,step:o.array,className:o.string};var E=n.memo(y);function b(e){var o=e.center,r=void 0===o?[0,0]:o,t=e.zoom,a=void 0===t?1:t,s=e.minZoom,l=void 0===s?1:s,f=e.maxZoom,p=void 0===f?5:f,d=e.zoomSensitivity,m=void 0===d?.025:d,v=e.onZoomStart,h=e.onZoomEnd,g=e.onMoveStart,y=e.onMoveEnd,E=e.disablePanning,b=void 0!==E&&E,M=e.disableZooming,w=void 0!==M&&M,j=n.useContext(u),x=j.width,k=j.height,L=j.projection,P=n.useRef(null),C=n.useState((function(){var e=L(r);return{x:x/2-e[0]*a,y:k/2-e[1]*a,last:[x/2-e[0]*a,k/2-e[1]*a],zoom:a,dragging:!1,zooming:!1}})),S=c(C,2),N=S[0],z=S[1],T=n.useRef(),Z=n.useRef(),A=n.useRef(!1),O=n.useRef();function G(e){var n=T.current.closest("svg");e.targetTouches?(Z.current.x=e.targetTouches[0].clientX,Z.current.y=e.targetTouches[0].clientY):(Z.current.x=e.clientX,Z.current.y=e.clientY);var o=n.getScreenCTM().inverse();return Z.current.matrixTransform(o)}function q(e){b||(A.current=!0,O.current=G(e),z((function(n){return g&&g(e,i({},n,{dragging:!0})),i({},n,{dragging:!0})})))}function F(e){if(A.current){e.preventDefault();var n=G(e);z((function(e){return i({},e,{x:e.last[0]+(n.x-O.current.x),y:e.last[1]+(n.y-O.current.y)})}))}}function D(e){A.current=!1,z((function(n){return y&&y(e,i({},n,{last:[n.x,n.y],dragging:!1})),i({},n,{last:[n.x,n.y],dragging:!1})}))}function U(e){if(e.ctrlKey&&!w){e.preventDefault();var n=e.deltaY*m;z((function(o){var r=o.zoom-n,t=r<l?l:r>p?p:r,a=G(e),s=(o.x-a.x)*t/o.zoom+a.x,c=(o.y-a.y)*t/o.zoom+a.y;return window.clearTimeout(P.current),P.current=setTimeout((function(){z((function(n){return h&&h(e,n),i({},n,{zooming:!1})}))}),66),v&&v(e,i({},o,{x:s,y:c,last:[s,c],zoom:t,zooming:!0})),i({},o,{x:s,y:c,last:[s,c],zoom:t,zooming:!0})}))}}return n.useLayoutEffect((function(){var e=T.current.closest("svg");return Z.current=e.createSVGPoint(),e.addEventListener("wheel",U),window.PointerEvent?(e.addEventListener("pointerdown",q),e.addEventListener("pointerup",D),e.addEventListener("pointerleave",D),e.addEventListener("pointermove",F)):(e.addEventListener("mousedown",q),e.addEventListener("mouseup",D),e.addEventListener("mouseleave",D),e.addEventListener("mousemove",F),e.addEventListener("touchstart",q),e.addEventListener("touchend",D),e.addEventListener("touchmove",F)),function(){e.removeEventListener("wheel",U),window.PointerEvent?(e.removeEventListener("pointerdown",q),e.removeEventListener("pointerup",D),e.removeEventListener("pointerleave",D),e.removeEventListener("pointermove",F)):(e.removeEventListener("mousedown",q),e.removeEventListener("mouseup",D),e.removeEventListener("mouseleave",D),e.removeEventListener("mousemove",F),e.removeEventListener("touchstart",q),e.removeEventListener("touchend",D),e.removeEventListener("touchmove",F))}}),[]),n.useEffect((function(){z((function(e){var n=(e.x-x/2)*a/e.zoom+x/2,o=(e.y-k/2)*a/e.zoom+k/2;return i({},e,{x:n,y:o,last:[n,o],zoom:a})}))}),[a]),n.useEffect((function(){var e=L(r);z((function(n){return i({},n,{x:x/2-e[0]*n.zoom,y:k/2-e[1]*n.zoom,last:[x/2-e[0]*n.zoom,k/2-e[1]*n.zoom]})}))}),[r[0],r[1]]),{elRef:T,position:N,transformString:"translate("+N.x+" "+N.y+") scale("+N.zoom+")"}}var M=function(e){var n=e.render,o=e.children,r=e.center,t=void 0===r?[0,0]:r,c=e.zoom,u=void 0===c?1:c,l=e.minZoom,f=void 0===l?1:l,p=e.maxZoom,d=void 0===p?5:p,m=e.zoomSensitivity,v=void 0===m?.025:m,h=e.onZoomStart,g=e.onZoomEnd,y=e.onMoveStart,E=e.onMoveEnd,M=e.disablePanning,w=void 0!==M&&M,j=e.disableZooming,x=void 0!==j&&j,k=e.className,L=void 0===k?"":k,P=s(e,["render","children","center","zoom","minZoom","maxZoom","zoomSensitivity","onZoomStart","onZoomEnd","onMoveStart","onMoveEnd","disablePanning","disableZooming","className"]),C=b({center:t,zoom:u,minZoom:f,maxZoom:d,zoomSensitivity:v,onZoomStart:h,onZoomEnd:g,onMoveStart:y,onMoveEnd:E,disablePanning:w,disableZooming:x}),S=C.elRef,N=C.position,z=C.transformString;return a.createElement("g",i({ref:S,className:"rsm-zoomable-group "+L},P),n?n(N):a.createElement("g",{transform:z},o))};M.propTypes={render:o.func,children:o.oneOfType([o.node,o.arrayOf(o.node)]),center:o.array,zoom:o.number,minZoom:o.number,maxZoom:o.number,zoomSensitivity:o.number,onZoomStart:o.func,onZoomEnd:o.func,onMoveStart:o.func,onMoveEnd:o.func,disablePanning:o.bool,disableZooming:o.bool,className:o.string};var w=function(e){var o=e.id,r=void 0===o?"rsm-sphere":o,t=e.fill,c=void 0===t?"transparent":t,l=e.stroke,f=void 0===l?"currentcolor":l,p=e.strokeWidth,d=void 0===p?.5:p,m=e.className,v=void 0===m?"":m,h=s(e,["id","fill","stroke","strokeWidth","className"]),g=n.useContext(u).path,y=n.useMemo((function(){return g({type:"Sphere"})}),[g]);return a.createElement(n.Fragment,null,a.createElement("defs",null,a.createElement("clipPath",{id:r},a.createElement("path",{d:y}))),a.createElement("path",i({d:y,fill:c,stroke:f,strokeWidth:d,style:{pointerEvents:"none"},className:"rsm-sphere "+v},h)))};w.propTypes={id:o.string,fill:o.string,stroke:o.string,strokeWidth:o.number,className:o.string};var j=n.memo(w),x=function(e){var o=e.coordinates,r=e.children,t=e.onMouseEnter,l=e.onMouseLeave,f=e.onMouseDown,p=e.onMouseUp,d=e.onFocus,m=e.onBlur,v=e.style,h=void 0===v?{}:v,g=e.className,y=void 0===g?"":g,E=s(e,["coordinates","children","onMouseEnter","onMouseLeave","onMouseDown","onMouseUp","onFocus","onBlur","style","className"]),b=n.useContext(u).projection,M=n.useState(!1),w=c(M,2),j=w[0],x=w[1],k=n.useState(!1),L=c(k,2),P=L[0],C=L[1],S=b(o),N=c(S,2),z=N[0],T=N[1];return a.createElement("g",i({transform:"translate("+z+", "+T+")",className:"rsm-marker "+y,onMouseEnter:function(e){C(!0),t&&t(e)},onMouseLeave:function(e){C(!1),j&&x(!1),l&&l(e)},onFocus:function(e){C(!0),d&&d(e)},onBlur:function(e){C(!1),j&&x(!1),m&&m(e)},onMouseDown:function(e){x(!0),f&&f(e)},onMouseUp:function(e){x(!1),p&&p(e)},style:h[j||P?j?"pressed":"hover":"default"]},E),r)};x.propTypes={coordinates:o.array,children:o.oneOfType([o.node,o.arrayOf(o.node)]),onMouseEnter:o.func,onMouseLeave:o.func,onMouseDown:o.func,onMouseUp:o.func,onFocus:o.func,onBlur:o.func,style:o.object,className:o.string};var k=function(e){var o=e.from,r=void 0===o?[0,0]:o,t=e.to,c=void 0===t?[0,0]:t,l=e.coordinates,f=e.stroke,p=void 0===f?"currentcolor":f,d=e.strokeWidth,m=void 0===d?3:d,v=e.fill,h=void 0===v?"transparent":v,g=e.className,y=void 0===g?"":g,E=s(e,["from","to","coordinates","stroke","strokeWidth","fill","className"]),b=n.useContext(u).path,M={type:"LineString",coordinates:l||[r,c]};return a.createElement("path",i({d:b(M),className:"rsm-line "+y,stroke:p,strokeWidth:m,fill:h},E))};k.propTypes={from:o.array,to:o.array,coordinates:o.array,stroke:o.string,strokeWidth:o.number,fill:o.string,className:o.string};var L=function(e){var o=e.subject,r=e.children,t=e.connectorProps,l=e.dx,f=void 0===l?30:l,p=e.dy,d=void 0===p?30:p,m=e.curve,v=void 0===m?0:m,h=e.className,g=void 0===h?"":h,y=s(e,["subject","children","connectorProps","dx","dy","curve","className"]),E=(0,n.useContext(u).projection)(o),b=c(E,2),M=b[0],w=b[1],j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,r=Array.isArray(o)?o:[o,o];return"M0,0 Q"+(-e/2-e/2*r[0])+","+(-n/2+n/2*r[1])+" "+-e+","+-n}(f,d,v);return a.createElement("g",i({transform:"translate("+(M+f)+", "+(w+d)+")",className:"rsm-annotation "+g},y),a.createElement("path",i({d:j,fill:"transparent",stroke:"#000"},t)),r)};L.propTypes={subject:o.array,children:o.oneOfType([o.node,o.arrayOf(o.node)]),dx:o.number,dy:o.number,curve:o.number,connectorProps:o.object,className:o.string},e.Annotation=L,e.ComposableMap=p,e.Geographies=v,e.Geography=g,e.Graticule=E,e.Line=k,e.Marker=x,e.Sphere=j,e.ZoomableGroup=M,e.useGeographies=m,e.useZoomPan=b,Object.defineProperty(e,"__esModule",{value:!0})}(n,o(0),o(6),o(344),o(1090))}}]);
//# sourceMappingURL=59.c316ed17.chunk.js.map