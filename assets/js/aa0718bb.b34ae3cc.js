/*! For license information please see aa0718bb.b34ae3cc.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[530272],{413766:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(824246),u=t(511151);const o={id:"plugin-kubernetes-backend.kubernetesbuilder.buildclustersupplier",title:"KubernetesBuilder.buildClusterSupplier()",description:"API reference for KubernetesBuilder.buildClusterSupplier()"},s=void 0,i={id:"reference/plugin-kubernetes-backend.kubernetesbuilder.buildclustersupplier",title:"KubernetesBuilder.buildClusterSupplier()",description:"API reference for KubernetesBuilder.buildClusterSupplier()",source:"@site/../docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildclustersupplier.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-backend.kubernetesbuilder.buildclustersupplier",permalink:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildclustersupplier",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildclustersupplier.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-backend.kubernetesbuilder.buildclustersupplier",title:"KubernetesBuilder.buildClusterSupplier()",description:"API reference for KubernetesBuilder.buildClusterSupplier()"}},c={},l=[{value:"Parameters",id:"parameters",level:2}];function a(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,u.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-kubernetes-backend"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder",children:(0,n.jsx)(r.code,{children:"KubernetesBuilder"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildclustersupplier",children:(0,n.jsx)(r.code,{children:"buildClusterSupplier"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"protected buildClusterSupplier(refreshInterval: Duration): KubernetesClustersSupplier;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"refreshInterval"}),(0,n.jsx)(r.td,{children:"Duration"}),(0,n.jsx)(r.td,{})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-node.kubernetesclusterssupplier",children:"KubernetesClustersSupplier"})})]})}function f(e={}){const{wrapper:r}={...(0,u.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},371426:(e,r,t)=>{var n=t(827378),u=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,o={},l=null,a=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)s.call(r,n)&&!c.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:u,type:e,key:l,ref:a,props:o,_owner:i.current}}r.Fragment=o,r.jsx=l,r.jsxs=l},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function m(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||b}function k(){}function _(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||b}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=m.prototype;var v=_.prototype=new k;v.constructor=_,y(v,m.prototype),v.isPureReactComponent=!0;var j=Array.isArray,x=Object.prototype.hasOwnProperty,S={current:null},g={key:!0,ref:!0,__self:!0,__source:!0};function C(e,r,n){var u,o={},s=null,i=null;if(null!=r)for(u in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(s=""+r.key),r)x.call(r,u)&&!g.hasOwnProperty(u)&&(o[u]=r[u]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var l=Array(c),a=0;a<c;a++)l[a]=arguments[a+2];o.children=l}if(e&&e.defaultProps)for(u in c=e.defaultProps)void 0===o[u]&&(o[u]=c[u]);return{$$typeof:t,type:e,key:s,ref:i,props:o,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function $(e,r,u,o,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case n:c=!0}}if(c)return s=s(c=e),e=""===o?"."+R(c,0):o,j(s)?(u="",null!=e&&(u=e.replace(w,"$&/")+"/"),$(s,r,u,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,u+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(w,"$&/")+"/")+e)),r.push(s)),1;if(c=0,o=""===o?".":o+":",j(e))for(var l=0;l<e.length;l++){var a=o+R(i=e[l],l);c+=$(i,r,u,a,s)}else if(a=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof a)for(e=a.call(e),l=0;!(i=e.next()).done;)c+=$(i=i.value,r,u,a=o+R(i,l++),s);else if("object"===i)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return c}function P(e,r,t){if(null==e)return e;var n=[],u=0;return $(e,n,"","",(function(e){return r.call(t,e,u++)})),n}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},D={transition:null},T={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:D,ReactCurrentOwner:S};r.Children={map:P,forEach:function(e,r,t){P(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return P(e,(function(){r++})),r},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=m,r.Fragment=u,r.Profiler=s,r.PureComponent=_,r.StrictMode=o,r.Suspense=a,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var u=y({},e.props),o=e.key,s=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,i=S.current),void 0!==r.key&&(o=""+r.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in r)x.call(r,l)&&!g.hasOwnProperty(l)&&(u[l]=void 0===r[l]&&void 0!==c?c[l]:r[l])}var l=arguments.length-2;if(1===l)u.children=n;else if(1<l){c=Array(l);for(var a=0;a<l;a++)c[a]=arguments[a+2];u.children=c}return{$$typeof:t,type:e.type,key:o,ref:s,props:u,_owner:i}},r.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=C,r.createFactory=function(e){var r=C.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:l,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=D.transition;D.transition={};try{e()}finally{D.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return I.current.useCallback(e,r)},r.useContext=function(e){return I.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return I.current.useDeferredValue(e)},r.useEffect=function(e,r){return I.current.useEffect(e,r)},r.useId=function(){return I.current.useId()},r.useImperativeHandle=function(e,r,t){return I.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return I.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return I.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return I.current.useMemo(e,r)},r.useReducer=function(e,r,t){return I.current.useReducer(e,r,t)},r.useRef=function(e){return I.current.useRef(e)},r.useState=function(e){return I.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return I.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return I.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>s});var n=t(667294);const u={},o=n.createContext(u);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(u):e.components||u:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);