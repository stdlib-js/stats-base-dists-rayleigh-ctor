// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,i=t.__defineSetter__,o=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return n({},"x",{}),!0}catch(n){return!1}}()?r:function(n,r,a){var c,y,l,N;if("object"!=typeof n||null===n||"[object Array]"===e.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((y="value"in a)&&(o.call(n,r)||f.call(n,r)?(c=n.__proto__,n.__proto__=t,delete n[r],n[r]=a.value,n.__proto__=c):n[r]=a.value),l="get"in a,N="set"in a,y&&(l||N))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(n,r,a.get),N&&i&&i.call(n,r,a.set),n};function c(n,r,t){a(n,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(n,r,t){a(n,r,{configurable:!1,enumerable:!1,get:t})}function l(n){return"number"==typeof n}var N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return N&&"symbol"==typeof Symbol.toStringTag}var p=Object.prototype.toString,v=Object.prototype.hasOwnProperty,m="function"==typeof Symbol?Symbol.toStringTag:"",b=s()?function(n){var r,t,e,u,i;if(null==n)return p.call(n);t=n[m],i=m,r=null!=(u=n)&&v.call(u,i);try{n[m]=void 0}catch(r){return p.call(n)}return e=p.call(n),r?n[m]=t:delete n[m],e}:function(n){return p.call(n)},g=Number,h=g.prototype.toString,d=s();function w(n){return"object"==typeof n&&(n instanceof g||(d?function(n){try{return h.call(n),!0}catch(n){return!1}}(n):"[object Number]"===b(n)))}function A(n){return l(n)||w(n)}function _(n){return l(n)&&n>0}function U(n){return w(n)&&n.valueOf()>0}function j(n){return _(n)||U(n)}function O(n){return n!=n}c(A,"isPrimitive",l),c(A,"isObject",w),c(j,"isPrimitive",_),c(j,"isObject",U);var I,S="function"==typeof Uint32Array,E="function"==typeof Uint32Array?Uint32Array:null,T="function"==typeof Uint32Array?Uint32Array:void 0;I=function(){var n,r,t;if("function"!=typeof E)return!1;try{r=new E(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(S&&t instanceof Uint32Array||"[object Uint32Array]"===b(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?T:function(){throw new Error("not implemented")};var F,H=I,P="function"==typeof Float64Array,G="function"==typeof Float64Array?Float64Array:null,k="function"==typeof Float64Array?Float64Array:void 0;F=function(){var n,r,t;if("function"!=typeof G)return!1;try{r=new G([1,3.14,-3.14,NaN]),t=r,n=(P&&t instanceof Float64Array||"[object Float64Array]"===b(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n}()?k:function(){throw new Error("not implemented")};var M,V=F,x="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,W="function"==typeof Uint8Array?Uint8Array:void 0;M=function(){var n,r,t;if("function"!=typeof L)return!1;try{r=new L(r=[1,3.14,-3.14,256,257]),t=r,n=(x&&t instanceof Uint8Array||"[object Uint8Array]"===b(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?W:function(){throw new Error("not implemented")};var Y,q=M,C="function"==typeof Uint16Array,R="function"==typeof Uint16Array?Uint16Array:null,z="function"==typeof Uint16Array?Uint16Array:void 0;Y=function(){var n,r,t;if("function"!=typeof R)return!1;try{r=new R(r=[1,3.14,-3.14,65536,65537]),t=r,n=(C&&t instanceof Uint16Array||"[object Uint16Array]"===b(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?z:function(){throw new Error("not implemented")};var B,D={uint16:Y,uint8:q};(B=new D.uint16(1))[0]=4660;var J=52===new D.uint8(B.buffer)[0],K=!0===J?1:0,Q=new V(1),X=new H(Q.buffer);function Z(n){return Q[0]=n,X[K]}var $=!0===J?1:0,nn=new V(1),rn=new H(nn.buffer);function tn(n,r){return nn[0]=n,rn[$]=r>>>0,nn[0]}var en=1023,un=g.NEGATIVE_INFINITY,on=.6931471803691238,fn=1.9082149292705877e-10,an=1048575;function cn(n){var r,t,e,u,i,o,f,a,c,y,l,N;return 0===n?un:O(n)||n<0?NaN:(i=0,(t=Z(n))<1048576&&(i-=54,t=Z(n*=0x40000000000000)),t>=2146435072?n+n:(i+=(t>>20)-en|0,i+=(a=614244+(t&=an)&1048576|0)>>20|0,f=(n=tn(n,t|1072693248^a))-1,(an&2+t)<3?0===f?0===i?0:i*on+i*fn:(o=f*f*(.5-.3333333333333333*f),0===i?f-o:i*on-(o-i*fn-f)):(a=t-398458|0,c=440401-t|0,u=(l=(N=(y=f/(2+f))*y)*N)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(l),e=N*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(l),o=e+u,(a|=c)>0?(r=.5*f*f,0===i?f-(r-y*(r+o)):i*on-(r-(y*(r+o)+i*fn)-f)):0===i?f-y*(f-o):i*on-(y*(f-o)-i*fn-f))))}var yn=1.4142135623730951,ln=3.141592653589793,Nn=1.2533141373155003,sn=Math.sqrt,pn=.6931471805599453,vn=sn(2*pn),mn=Math.floor;function bn(n){return mn(n)===n}function gn(n){return bn(n/2)}function hn(n){return gn(n>0?n-1:n+1)}var dn,wn,An=Number.POSITIVE_INFINITY;function _n(n){return n===An||n===un}function Un(n){return Math.abs(n)}!0===J?(dn=1,wn=0):(dn=0,wn=1);var jn={HIGH:dn,LOW:wn},On=new V(1),In=new H(On.buffer),Sn=jn.HIGH,En=jn.LOW;function Tn(n,r,t,e){return On[0]=n,r[e]=In[Sn],r[e+t]=In[En],r}function Fn(n){return Tn(n,[0,0],1,0)}c(Fn,"assign",Tn);var Hn=!0===J?0:1,Pn=new V(1),Gn=new H(Pn.buffer);function kn(n,r){return Pn[0]=n,Gn[Hn]=r>>>0,Pn[0]}function Mn(n){return 0|n}var Vn,xn,Ln=2147483647;!0===J?(Vn=1,xn=0):(Vn=0,xn=1);var Wn={HIGH:Vn,LOW:xn},Yn=new V(1),qn=new H(Yn.buffer),Cn=Wn.HIGH,Rn=Wn.LOW;function zn(n,r){return qn[Cn]=n,qn[Rn]=r,Yn[0]}var Bn=[0,0];function Dn(n,r){var t,e;return Fn.assign(n,Bn,1,0),t=Bn[0],t&=Ln,e=Z(r),zn(t|=e&=2147483648,Bn[1])}var Jn=1048576,Kn=[1,1.5],Qn=[0,.5849624872207642],Xn=[0,1.350039202129749e-8];function Zn(n,r,t,e){return O(n)||_n(n)?(r[e]=n,r[e+t]=0,r):0!==n&&Un(n)<22250738585072014e-324?(r[e]=4503599627370496*n,r[e+t]=-52,r):(r[e]=n,r[e+t]=0,r)}c((function(n){return Zn(n,[0,0],1,0)}),"assign",Zn);var $n=[0,0],nr=[0,0];function rr(n,r){var t,e;return 0===r||0===n||O(n)||_n(n)?n:(Zn(n,$n,1,0),r+=$n[1],r+=function(n){var r=Z(n);return(r=(2146435072&r)>>>20)-en|0}(n=$n[0]),r<-1074?Dn(0,n):r>1023?n<0?un:An:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,Fn.assign(n,nr,1,0),t=nr[0],t&=2148532223,e*zn(t|=r+en<<20,nr[1])))}var tr=1048575,er=1048576,ur=1083179008,ir=1e300,or=1e-300,fr=[0,0],ar=[0,0];function cr(n,r){var t,e,u,i,o,f,a,c,y,l,N,s,p,v;if(O(n)||O(r))return NaN;if(Fn.assign(r,fr,1,0),o=fr[0],0===fr[1]){if(0===r)return 1;if(1===r)return n;if(-1===r)return 1/n;if(.5===r)return sn(n);if(-.5===r)return 1/sn(n);if(2===r)return n*n;if(3===r)return n*n*n;if(4===r)return(n*=n)*n;if(_n(r))return function(n,r){return-1===n?(n-n)/(n-n):1===n?1:Un(n)<1==(r===An)?0:An}(n,r)}if(Fn.assign(n,fr,1,0),i=fr[0],0===fr[1]){if(0===i)return function(n,r){return r===un?An:r===An?0:r>0?hn(r)?n:0:hn(r)?Dn(An,n):An}(n,r);if(1===n)return 1;if(-1===n&&hn(r))return-1;if(_n(n))return n===un?cr(-0,-r):r<0?0:An}if(n<0&&!1===bn(r))return(n-n)/(n-n);if(u=Un(n),t=i&Ln|0,e=o&Ln|0,a=o>>>31|0,f=(f=i>>>31|0)&&hn(r)?-1:1,e>1105199104){if(e>1139802112)return function(n,r){return(Z(n)&Ln)<=1072693247?r<0?1/0:0:r>0?1/0:0}(n,r);if(t<1072693247)return 1===a?f*ir*ir:f*or*or;if(t>1072693248)return 0===a?f*ir*ir:f*or*or;N=function(n,r){var t,e,u,i,o,f;return t=(o=1.9259629911266175e-8*(u=r-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=kn(e=(i=1.4426950216293335*u)+o,0))-i),n[0]=e,n[1]=t,n}(ar,u)}else N=function(n,r,t){var e,u,i,o,f,a,c,y,l,N,s,p,v,m,b,g,h,d,w,A,_;return d=0,t<Jn&&(d-=53,t=Z(r*=9007199254740992)),d+=(t>>20)-en|0,t=1072693248|(w=1048575&t|0),w<=235662?A=0:w<767610?A=1:(A=0,d+=1,t-=Jn),o=kn(u=(g=(r=tn(r,t))-(c=Kn[A]))*(h=1/(r+c)),0),e=524288+(t>>1|536870912),a=tn(0,e+=A<<18),b=(i=u*u)*i*(0===(_=i)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=kn(a=3+(i=o*o)+(b+=(f=h*(g-o*a-o*(r-(a-c))))*(o+u)),0),v=(s=-7.028461650952758e-9*(l=kn(l=(g=o*a)+(h=f*a+(b-(a-3-i))*u),0))+.9617966939259756*(h-(l-g))+Xn[A])-((p=kn(p=(N=.9617967009544373*l)+s+(y=Qn[A])+(m=d),0))-m-y-N),n[0]=p,n[1]=v,n}(ar,u,t);if(s=(l=(r-(c=kn(r,0)))*N[0]+r*N[1])+(y=c*N[0]),Fn.assign(s,fr,1,0),p=Mn(fr[0]),v=Mn(fr[1]),p>=ur){if(0!=(p-ur|v))return f*ir*ir;if(l+8008566259537294e-32>s-y)return f*ir*ir}else if((p&Ln)>=1083231232){if(0!=(p-3230714880|v))return f*or*or;if(l<=s-y)return f*or*or}return s=function(n,r,t){var e,u,i,o,f,a,c,y,l,N;return l=((y=n&Ln|0)>>20)-en|0,c=0,y>1071644672&&(u=tn(0,((c=n+(er>>l+1)>>>0)&~(tr>>(l=((c&Ln)>>20)-en|0)))>>>0),c=(c&tr|er)>>20-l>>>0,n<0&&(c=-c),r-=u),n=Mn(n=Z(a=1-((a=(i=.6931471824645996*(u=kn(u=t+r,0)))+(o=(t-(u-r))*pn+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(N=u)?.16666666666666602:.16666666666666602+N*(N*(6613756321437934e-20+N*(4.1381367970572385e-8*N-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=o-(a-i))+a*f)-a))),(n+=c<<20>>>0)>>20<=0?rr(a,c):tn(a,n)}(p,y,l),f*s}var yr=.5019328882303191/cr(4-ln,1.5),lr=sn(4-ln),Nr=Math.ceil;function sr(n){return n<0?Nr(n):mn(n)}var pr=1.4426950408889634,vr=1/(1<<28);function mr(n){var r;return O(n)||n===An?n:n===un?0:n>709.782712893384?An:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<vr?1+n:function(n,r,t){var e,u,i,o;return rr(1-(r-(e=n-r)*(i=e-(u=e*e)*(0===(o=u)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-n),t)}(n-.6931471803691238*(r=sr(n<0?pr*n-.5:pr*n+.5)),1.9082149292705877e-10*r,r)}function br(n,r){var t;return O(n)||O(r)||r<0?NaN:0===r?n<0?0:1:n<0?0:(t=cr(r,2),1-mr(-cr(n,2)/(2*t)))}function gr(n){return function(){return n}}function hr(n){return O(n)?gr(NaN):function(r){return O(r)?NaN:r<n?0:1}}c((function(n,r){return O(n)||O(r)?NaN:n<r?0:1}),"factory",hr),c(br,"factory",(function(n){var r;return O(n)||n<0?gr(NaN):0===n?hr(0):(r=cr(n,2),function(n){return O(n)?NaN:n<0?0:1-mr(-cr(n,2)/(2*r))})}));var dr=.6931471803691238,wr=1.9082149292705877e-10,Ar=1.4426950408889634;function _r(n){var r,t,e,u,i,o,f,a,c,y,l,N;if(n===An||O(n))return n;if(n===un)return-1;if(0===n)return n;if(n<0?(t=!0,f=-n):(t=!1,f=n),f>=38.816242111356935){if(t)return-1;if(f>=709.782712893384)return An}if(i=0|Z(f),f>.34657359027997264)f<1.0397207708399179?t?(e=n+dr,u=-wr,N=-1):(e=n-dr,u=wr,N=1):(N=t?Ar*n-.5:Ar*n+.5,e=n-(y=N|=0)*dr,u=y*wr),c=e-(n=e-u)-u;else{if(i<1016070144)return n;N=0}return o=1+(a=n*(r=.5*n))*function(n){return 0===n?-.03333333333333313:n*(.0015873015872548146+n*(n*(4008217827329362e-21+-2.0109921818362437e-7*n)-793650757867488e-19))-.03333333333333313}(a),l=a*((o-(y=3-o*r))/(6-n*y)),0===N?n-(n*l-a):(l=n*(l-c)-c,l-=a,-1===N?.5*(n-l)-.5:1===N?n<-.25?-2*(l-(n+.5)):1+2*(n-l):N<=-2||N>56?(f=tn(f=1-(l-n),e=Z(f)+(N<<20)|0))-1:(y=1,N<20?f=(y=tn(y,e=1072693248-(2097152>>N)|0))-(l-n):(f=n-(l+(y=tn(y,e=en-N<<20|0))),f+=1),tn(f,e=Z(f)+(N<<20)|0)))}var Ur=.6931471803691238,jr=1.9082149292705877e-10;function Or(n){var r,t,e,u,i,o,f,a,c,y;if(n<-1||O(n))return NaN;if(-1===n)return un;if(n===An)return n;if(0===n)return n;if(y=1,(e=n<0?-n:n)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(y=0,u=n,t=1)}return 0!==y&&(e<9007199254740992?(i=(y=((t=Z(c=1+n))>>20)-en)>0?1-(c-n):n-(c-1),i/=c):(y=((t=Z(c=n))>>20)-en,i=0),(t&=1048575)<434334?c=tn(c,1072693248|t):(y+=1,c=tn(c,1071644672|t),t=1048576-t>>2),u=c-1),r=.5*u*u,0===t?0===u?y*Ur+(i+=y*jr):y*Ur-((a=r*(1-.6666666666666666*u))-(y*jr+i)-u):(a=(f=(o=u/(2+u))*o)*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))}(f),0===y?u-(r-o*(r+a)):y*Ur-(r-(o*(r+a)+(y*jr+i))-u))}var Ir=-.6931471805599453;function Sr(n,r){var t,e;return O(n)||O(r)||r<0?NaN:0===r?n<0?un:0:n<0?un:(t=cr(r,2),(e=-cr(n,2)/(2*t))<Ir?Or(-mr(e)):cn(-_r(e)))}function Er(n){return O(n)?gr(NaN):function(r){return O(r)?NaN:r<n?un:0}}function Tr(n,r){var t;return O(n)||O(r)||r<0?NaN:0===r?0===n?An:un:n<0||n===An?un:cn(1/(t=cr(r,2))*n)-cr(n,2)/(2*t)}function Fr(n){return O(n)?gr(NaN):function(r){return O(r)?NaN:r===n?An:un}}c((function(n,r){return O(n)||O(r)?NaN:n<r?un:0}),"factory",Er),c(Sr,"factory",(function(n){var r;return O(n)||n<0?gr(NaN):0===n?Er(0):(r=cr(n,2),function(n){var t;return O(n)?NaN:n<0?un:(t=-cr(n,2)/(2*r))<Ir?Or(-mr(t)):cn(-_r(t))})})),c((function(n,r){return O(n)||O(r)?NaN:n===r?An:un}),"factory",Fr),c(Tr,"factory",(function(n){var r,t;return O(n)||n<0?gr(NaN):0===n?Fr(0):(t=cr(n,2),r=1/t,function(n){return O(n)?NaN:n<0||n===An?un:cn(r*n)-cr(n,2)/(2*t)})}));var Hr=.8450629115104675;function Pr(n){var r,t,e,u,i,o,f;return O(n)?NaN:n===An?1:n===un?-1:0===n?n:(n<0?(r=!0,t=-n):(r=!1,t=n),t<.84375?t<3.725290298461914e-9?t<2848094538889218e-321?.125*(8*n+1.0270333367641007*n):n+.1283791670955126*n:(u=.12837916709551256+(e=n*n)*function(n){return 0===n?-.3250421072470015:n*(n*(-23763016656650163e-21*n-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),i=1+e*function(n){return 0===n?.39791722395915535:.39791722395915535+n*(.0650222499887673+n*(.005081306281875766+n*(.00013249473800432164+-3960228278775368e-21*n)))}(e),n+n*(u/i)):t<1.25?(o=(i=t-1)*function(n){return 0===n?.41485611868374833:.41485611868374833+n*(n*(.31834661990116175+n*(n*(.035478304325618236+-.002166375594868791*n)-.11089469428239668))-.3722078760357013)}(i)-.0023621185607526594,f=1+i*function(n){return 0===n?.10642088040084423:.10642088040084423+n*(.540397917702171+n*(.07182865441419627+n*(.12617121980876164+n*(.01363708391202905+.011984499846799107*n))))}(i),r?-Hr-o/f:Hr+o/f):t>=6?r?-1:1:(i=1/(t*t),t<2.857142857142857?(u=i*function(n){return 0===n?-.6938585727071818:n*(n*(n*(n*(n*(-9.814329344169145*n-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(i)-.009864944034847148,i=1+i*function(n){return 0===n?19.651271667439257:19.651271667439257+n*(137.65775414351904+n*(434.56587747522923+n*(645.3872717332679+n*(429.00814002756783+n*(108.63500554177944+n*(6.570249770319282+-.0604244152148581*n))))))}(i)):(u=i*function(n){return 0===n?-.799283237680523:n*(n*(n*(n*(-483.5191916086514*n-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(i)-.0098649429247001,i=1+i*function(n){return 0===n?30.33806074348246:30.33806074348246+n*(325.7925129965739+n*(1536.729586084437+n*(3199.8582195085955+n*(2553.0504064331644+n*(474.52854120695537+-22.44095244658582*n)))))}(i)),u=mr(-(e=kn(t,0))*e-.5625)*mr((e-t)*(e+t)+u/i),r?u/t-1:1-u/t))}function Gr(n,r){var t,e;return O(n)||O(r)||r<0?NaN:(e=1+(t=n*r)*mr(t*t/2),e*=Nn*(Pr(t/yn)+1))}function kr(n,r){var t;return O(n)||O(r)||r<0?NaN:0===r?0===n?An:0:n<0||n===An?0:1/(t=cr(r,2))*n*mr(-cr(n,2)/(2*t))}function Mr(n){return O(n)?gr(NaN):function(r){return O(r)?NaN:r===n?An:0}}function Vr(n,r){return O(r)||r<0||O(n)||n<0||n>1?NaN:0===r?0:sn(r*r*-2*Or(-n))}function xr(n){return O(n)?gr(NaN):function(r){return O(r)||r<0||r>1?NaN:n}}function Lr(){var n,r=arguments,t=r[0],e="https://stdlib.io/e/"+t+"?";for(n=1;n<r.length;n++)e+="&arg[]="+encodeURIComponent(r[n]);return e}function Wr(){var n;if(!(this instanceof Wr))return 0===arguments.length?new Wr:new Wr(arguments[0]);if(arguments.length){if(!_(n=arguments[0]))throw new TypeError(Lr("0Ye7u",n))}else n=1;return a(this,"sigma",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!_(r))throw new TypeError(Lr("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),this}return c(Gr,"factory",(function(n){return O(n)||n<0?gr(NaN):function(r){var t,e;return O(r)?NaN:(e=1+(t=r*n)*mr(t*t/2),e*=Nn*(Pr(t/yn)+1))}})),c((function(n,r){return O(n)||O(r)?NaN:n===r?An:0}),"factory",Mr),c(kr,"factory",(function(n){var r,t;return O(n)||n<0?gr(NaN):0===n?Mr(0):(t=cr(n,2),r=1/t,function(n){return O(n)?NaN:n<0||n===An?0:r*n*mr(-cr(n,2)/(2*t))})})),c((function(n,r){return O(n)||n<0||n>1?NaN:r}),"factory",xr),c(Vr,"factory",(function(n){var r;return O(n)||n<0?gr(NaN):0===n?xr(0):(r=n*n,function(n){return O(n)||n<0||n>1?NaN:sn(-2*r*Or(-n))})})),y(Wr.prototype,"entropy",(function(){return O(n=this.sigma)||n<=0?NaN:1+cn(n/yn)+.28860783245076643;var n})),y(Wr.prototype,"kurtosis",(function(){return O(n=this.sigma)||n<0?NaN:.2450893006876391;var n})),y(Wr.prototype,"mean",(function(){return O(n=this.sigma)||n<0?NaN:n*Nn;var n})),y(Wr.prototype,"median",(function(){return O(n=this.sigma)||n<0?NaN:n*vn;var n})),y(Wr.prototype,"mode",(function(){return O(n=this.sigma)||n<0?NaN:n;var n})),y(Wr.prototype,"skewness",(function(){return n=this.k,this.sigma,O(n)||n<0?NaN:yr;var n})),y(Wr.prototype,"stdev",(function(){return O(n=this.sigma)||n<0?NaN:lr*n/yn;var n})),y(Wr.prototype,"variance",(function(){return O(n=this.sigma)||n<0?NaN:(4-ln)*n*n/2;var n})),c(Wr.prototype,"cdf",(function(n){return br(n,this.sigma)})),c(Wr.prototype,"logcdf",(function(n){return Sr(n,this.sigma)})),c(Wr.prototype,"logpdf",(function(n){return Tr(n,this.sigma)})),c(Wr.prototype,"mgf",(function(n){return Gr(n,this.sigma)})),c(Wr.prototype,"pdf",(function(n){return kr(n,this.sigma)})),c(Wr.prototype,"quantile",(function(n){return Vr(n,this.sigma)})),Wr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).Rayleigh=r();
//# sourceMappingURL=index.js.map
