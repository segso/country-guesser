(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7143:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7906)}])},5885:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var o=n(1527),r=n(7560),l=n.n(r),u=n(959),a=n(6953),s=n.n(a);function c(e){let{onConfirm:t,onCancel:n,title:r,children:l}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:s().background}),(0,o.jsxs)("div",{className:s().popup,children:[(0,o.jsx)("p",{className:s().title,children:r}),(0,o.jsx)("p",{className:s().text,children:l}),(0,o.jsxs)("div",{className:s()["button-list"],children:[(0,o.jsx)("button",{className:"".concat(s().confirm," ").concat(s().button),onClick:t,children:"Confirm"}),(0,o.jsx)("button",{className:"".concat(s().cancel," ").concat(s().button),onClick:n,children:"Cancel"})]})]})]})}var i=n(2316);function f(e){let{home:t,text:n}=e,r=(0,o.jsx)("img",{src:"/country-guesser/icons/home.svg",alt:"Home",className:l().image}),[a,s]=(0,u.useState)(!1),f=(0,i.useRouter)();return(0,o.jsxs)(o.Fragment,{children:[a&&(0,o.jsx)(c,{onConfirm:()=>{f.push("/")},onCancel:()=>{s(!1)},title:"Are you sure you want to quit?",children:"Your progress will not be saved."}),(0,o.jsxs)("nav",{className:l().navigation,children:[void 0!=n&&(0,o.jsx)("p",{className:l().text,children:n}),(0,o.jsx)("a",{href:"https://github.com/seg-mx/country-guesser",children:(0,o.jsx)("img",{src:"/country-guesser/icons/github.svg",alt:"GitHub",className:l().image})}),t?(0,o.jsx)("a",{href:"/country-guesser",onClick:e=>e.preventDefault(),children:r}):(0,o.jsx)("a",{href:"/country-guesser",onClick:e=>{e.preventDefault(),s(!0)},children:r})]})]})}function p(e){let{children:t,home:n,text:r}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f,{home:n,text:r}),t]})}},4885:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1747:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(1322).Z,r=n(6239).Z,l=o(n(959)),u=n(6519),a=n(8577),s=n(2699),c=n(3036),i=n(71),f=n(5755),p=n(4885),d=n(9318);let h=new Set;function _(e,t,n,o){if(u.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+r;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function m(e){return"string"==typeof e?e:a.formatUrl(e)}let v=l.default.forwardRef(function(e,t){let n,o;let{href:a,as:h,children:v,prefetch:g,passHref:y,replace:b,shallow:x,scroll:j,locale:C,onClick:k,onMouseEnter:N,onTouchStart:E,legacyBehavior:M=!1}=e,P=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,M&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let w=!1!==g,O=l.default.useContext(c.RouterContext),L=l.default.useContext(i.AppRouterContext),R=null!=O?O:L,S=!O,{href:T,as:I}=l.default.useMemo(()=>{if(!O){let e=m(a);return{href:e,as:h?m(h):e}}let[e,t]=u.resolveHref(O,a,!0);return{href:e,as:h?u.resolveHref(O,h):t||e}},[O,a,h]),D=l.default.useRef(T),H=l.default.useRef(I);M&&(o=l.default.Children.only(n));let z=M?o&&"object"==typeof o&&o.ref:t,[A,K,U]=f.useIntersection({rootMargin:"200px"}),Z=l.default.useCallback(e=>{(H.current!==I||D.current!==T)&&(U(),H.current=I,D.current=T),A(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[I,z,T,U,A]);l.default.useEffect(()=>{R&&K&&w&&_(R,T,I,{locale:C})},[I,T,K,C,w,null==O?void 0:O.locale,R]);let F={ref:Z,onClick(e){M||"function"!=typeof k||k(e),M&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,n,o,r,a,s,c,i,f){let{nodeName:p}=e.currentTarget,d="A"===p.toUpperCase();if(d&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:a,locale:c,scroll:s}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!f})};i?l.default.startTransition(h):h()}(e,R,T,I,b,x,j,C,S,w)},onMouseEnter(e){M||"function"!=typeof N||N(e),M&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),R&&(w||!S)&&_(R,T,I,{locale:C,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){M||"function"!=typeof E||E(e),M&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),R&&(w||!S)&&_(R,T,I,{locale:C,priority:!0,bypassPrefetchedCheck:!0})}};if(!M||y||"a"===o.type&&!("href"in o.props)){let e=void 0!==C?C:null==O?void 0:O.locale,t=(null==O?void 0:O.isLocaleDomain)&&p.getDomainLocale(I,e,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);F.href=t||d.addBasePath(s.addLocale(I,e,null==O?void 0:O.defaultLocale))}return M?l.default.cloneElement(o,F):l.default.createElement("a",Object.assign({},P,F),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5755:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!l,[i,f]=o.useState(!1),[p,d]=o.useState(null);o.useEffect(()=>{if(l){if(!c&&!i&&p&&p.tagName){let e=function(e,t,n){let{id:o,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=a.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=u.get(o)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:r},a.push(n),u.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),u.delete(o);let e=a.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&a.splice(e,1)}}}(p,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!i){let e=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(e)}},[p,c,n,t,i]);let h=o.useCallback(()=>{f(!1)},[]);return[d,i,h]};var o=n(959),r=n(7181);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7906:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var o=n(1527),r=n(5885),l=n(7563),u=n.n(l),a=n(4690),s=n.n(a);function c(){return(0,o.jsxs)(r.Z,{home:!0,children:[(0,o.jsx)("h1",{className:s().title,children:"Country Guesser"}),(0,o.jsx)(u(),{href:"/play",className:s().play,children:"Play"})]})}},7560:function(e){e.exports={navigation:"header_navigation__UE1ly",image:"header_image__CijPH",text:"header_text__mFYQG"}},4690:function(e){e.exports={title:"home_title__1hzQa",play:"home_play__VlLgz"}},6953:function(e){e.exports={background:"popup_background__bN0Pw",popup:"popup_popup__WXEjK",title:"popup_title__07fsA",text:"popup_text__Za_zR","button-list":"popup_button-list__CygkL",button:"popup_button__mp8SR",confirm:"popup_confirm__dbAlj",cancel:"popup_cancel__DLzLi"}},7563:function(e,t,n){e.exports=n(1747)},2316:function(e,t,n){e.exports=n(3729)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7143)}),_N_E=e.O()}]);