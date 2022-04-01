// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(n){var e=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:function(){return r[n]}})})),t}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,i=Object.prototype,a=i.toString,u=i.__defineGetter__,o=i.__defineSetter__,f=i.__lookupGetter__,c=i.__lookupSetter__;var v=function(r,t,n){var e,v,s,l;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===a.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((v="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=i,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),s="get"in n,l="set"in n,v&&(s||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,t,n.get),l&&o&&o.call(r,t,n.set),r},s=e,l=v,p=n()?s:l,g=p;var y=function(r,t,n){g(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},h=y,m=p;var d=function(r,t,n){m(r,t,{configurable:!1,enumerable:!1,get:n})},b=d;var w=function(r){return"number"==typeof r};var N=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var E=function(){return N&&"symbol"==typeof Symbol.toStringTag},j=Object.prototype.toString,P=j;var A=function(r){return P.call(r)},_=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&_.call(r,t)},T="function"==typeof Symbol?Symbol.toStringTag:"",x=O,V=T,S=j;var k=A,U=function(r){var t,n,e;if(null==r)return S.call(r);n=r[V],t=x(r,V);try{r[V]=void 0}catch(t){return S.call(r)}return e=S.call(r),t?r[V]=n:delete r[V],e},I=E()?U:k,F=Number,M=F.prototype.toString;var R=I,$=F,G=function(r){try{return M.call(r),!0}catch(r){return!1}},C=E();var L=function(r){return"object"==typeof r&&(r instanceof $||(C?G(r):"[object Number]"===R(r)))},H=w,W=L;var B=h,Z=function(r){return H(r)||W(r)},X=L;B(Z,"isPrimitive",w),B(Z,"isObject",X);var q=Z,z=q.isPrimitive;var Y=function(r){return z(r)&&r>0},D=q.isObject;var J=function(r){return D(r)&&r.valueOf()>0},K=Y,Q=J;var rr=h,tr=function(r){return K(r)||Q(r)},nr=J;rr(tr,"isPrimitive",Y),rr(tr,"isObject",nr);var er=tr;var ir=function(r){return r!=r},ar=I,ur="function"==typeof Uint32Array;var or="function"==typeof Uint32Array?Uint32Array:null,fr=function(r){return ur&&r instanceof Uint32Array||"[object Uint32Array]"===ar(r)},cr=or;var vr=function(){var r,t;if("function"!=typeof cr)return!1;try{t=new cr(t=[1,3.14,-3.14,4294967296,4294967297]),r=fr(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var sr="function"==typeof Uint32Array?Uint32Array:void 0,lr=function(){throw new Error("not implemented")},pr=vr()?sr:lr,gr=I,yr="function"==typeof Float64Array;var hr="function"==typeof Float64Array?Float64Array:null,mr=function(r){return yr&&r instanceof Float64Array||"[object Float64Array]"===gr(r)},dr=hr;var br=function(){var r,t;if("function"!=typeof dr)return!1;try{t=new dr([1,3.14,-3.14,NaN]),r=mr(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var wr="function"==typeof Float64Array?Float64Array:void 0,Nr=function(){throw new Error("not implemented")},Er=br()?wr:Nr,jr=I,Pr="function"==typeof Uint8Array;var Ar="function"==typeof Uint8Array?Uint8Array:null,_r=function(r){return Pr&&r instanceof Uint8Array||"[object Uint8Array]"===jr(r)},Or=Ar;var Tr=function(){var r,t;if("function"!=typeof Or)return!1;try{t=new Or(t=[1,3.14,-3.14,256,257]),r=_r(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var xr="function"==typeof Uint8Array?Uint8Array:void 0,Vr=function(){throw new Error("not implemented")},Sr=Tr()?xr:Vr,kr=I,Ur="function"==typeof Uint16Array;var Ir="function"==typeof Uint16Array?Uint16Array:null,Fr=function(r){return Ur&&r instanceof Uint16Array||"[object Uint16Array]"===kr(r)},Mr=Ir;var Rr=function(){var r,t;if("function"!=typeof Mr)return!1;try{t=new Mr(t=[1,3.14,-3.14,65536,65537]),r=Fr(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var $r,Gr="function"==typeof Uint16Array?Uint16Array:void 0,Cr=function(){throw new Error("not implemented")},Lr={uint16:Rr()?Gr:Cr,uint8:Sr};($r=new Lr.uint16(1))[0]=4660;var Hr=52===new Lr.uint8($r.buffer)[0],Wr=pr,Br=!0===Hr?1:0,Zr=new Er(1),Xr=new Wr(Zr.buffer);var qr=function(r){return Zr[0]=r,Xr[Br]},zr=pr,Yr=!0===Hr?1:0,Dr=new Er(1),Jr=new zr(Dr.buffer);var Kr=function(r,t){return Dr[0]=r,Jr[Yr]=t>>>0,Dr[0]},Qr=Kr,rt=F.NEGATIVE_INFINITY;var tt=qr,nt=Qr,et=ir,it=rt,at=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},ut=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},ot=.6931471803691238,ft=1.9082149292705877e-10;var ct=function(r){var t,n,e,i,a,u,o,f,c,v,s;return 0===r?it:et(r)||r<0?NaN:(i=0,(n=tt(r))<1048576&&(i-=54,n=tt(r*=0x40000000000000)),n>=2146435072?r+r:(i+=(n>>20)-1023|0,i+=(o=(n&=1048575)+614244&1048576|0)>>20|0,u=(r=nt(r,n|1072693248^o))-1,(1048575&2+n)<3?0===u?0===i?0:i*ot+i*ft:(a=u*u*(.5-.3333333333333333*u),0===i?u-a:i*ot-(a-i*ft-u)):(o=n-398458|0,f=440401-n|0,e=(v=(s=(c=u/(2+u))*c)*s)*at(v),a=s*ut(v)+e,(o|=f)>0?(t=.5*u*u,0===i?u-(t-c*(t+a)):i*ot-(t-(c*(t+a)+i*ft)-u)):0===i?u-c*(u-a):i*ot-(c*(u-a)-i*ft-u))))},vt=ct,st=ir,lt=vt;var pt=function(r){return st(r)||r<=0?NaN:1+lt(r/1.4142135623730951)+.28860783245076643},gt=3.141592653589793,yt=ir;var ht=function(r){return yt(r)||r<0?NaN:.2450893006876391},mt=ir;var dt=function(r){return mt(r)||r<0?NaN:1.2533141373155003*r},bt=Math.sqrt,wt=ir,Nt=bt(1.3862943611198906);var Et=function(r){return wt(r)||r<0?NaN:r*Nt},jt=ir;var Pt=function(r){return jt(r)||r<0?NaN:r},At=Math.floor,_t=At;var Ot=function(r){return _t(r)===r},Tt=Ot;var xt=function(r){return Tt(r/2)};var Vt=function(r){return xt(r>0?r-1:r+1)},St=Number.POSITIVE_INFINITY,kt=St,Ut=rt;var It=function(r){return r===kt||r===Ut};var Ft,Mt,Rt=function(r){return Math.abs(r)};!0===Hr?(Ft=1,Mt=0):(Ft=0,Mt=1);var $t=pr,Gt={HIGH:Ft,LOW:Mt},Ct=new Er(1),Lt=new $t(Ct.buffer),Ht=Gt.HIGH,Wt=Gt.LOW;var Bt=function(r,t){return Ct[0]=t,r[0]=Lt[Ht],r[1]=Lt[Wt],r};var Zt=function(r,t){return 1===arguments.length?Bt([0,0],r):Bt(r,t)},Xt=pr,qt=!0===Hr?0:1,zt=new Er(1),Yt=new Xt(zt.buffer);var Dt=function(r,t){return zt[0]=r,Yt[qt]=t>>>0,zt[0]},Jt=Dt;var Kt,Qt,rn=function(r){return 0|r};!0===Hr?(Kt=1,Qt=0):(Kt=0,Qt=1);var tn=pr,nn={HIGH:Kt,LOW:Qt},en=new Er(1),an=new tn(en.buffer),un=nn.HIGH,on=nn.LOW;var fn=function(r,t){return an[un]=r,an[on]=t,en[0]},cn=Zt,vn=qr,sn=fn,ln=[0,0];var pn=function(r,t){var n,e;return cn(ln,r),n=ln[0],n&=2147483647,e=vn(t),sn(n|=e&=2147483648,ln[1])},gn=Vt,yn=pn,hn=rt,mn=St;var dn=qr;var bn=Rt,wn=St;var Nn=qr,En=Jt,jn=Qr,Pn=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},An=[1,1.5],_n=[0,.5849624872207642],On=[0,1.350039202129749e-8];var Tn=Jt,xn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Vn=It,Sn=ir,kn=Rt;var Un=function(r,t){return Sn(t)||Vn(t)?(r[0]=t,r[1]=0,r):0!==t&&kn(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var In=qr;var Fn=function(r){var t=In(r);return(t=(2146435072&t)>>>20)-1023|0},Mn=St,Rn=rt,$n=ir,Gn=It,Cn=pn,Ln=function(r,t){return 1===arguments.length?Un([0,0],r):Un(r,t)},Hn=Fn,Wn=Zt,Bn=fn,Zn=[0,0],Xn=[0,0];var qn=function(r,t){var n,e;return 0===t||0===r||$n(r)||Gn(r)?r:(Ln(Zn,r),t+=Zn[1],(t+=Hn(r=Zn[0]))<-1074?Cn(0,r):t>1023?r<0?Rn:Mn:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Wn(Xn,r),n=Xn[0],n&=2148532223,e*Bn(n|=t+1023<<20,Xn[1])))},zn=qn;var Yn=qr,Dn=Qr,Jn=Jt,Kn=rn,Qn=zn,re=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var te=ir,ne=Vt,ee=It,ie=Ot,ae=bt,ue=Rt,oe=Zt,fe=Jt,ce=rn,ve=rt,se=St,le=function(r,t){return t===hn?mn:t===mn?0:t>0?gn(t)?r:0:gn(t)?yn(mn,r):mn},pe=function(r,t){return(2147483647&dn(r))<=1072693247?t<0?1/0:0:t>0?1/0:0},ge=function(r,t){return-1===r?(r-r)/(r-r):1===r?1:bn(r)<1==(t===wn)?0:wn},ye=function(r,t,n){var e,i,a,u,o,f,c,v,s,l,p,g,y,h,m,d,b,w,N,E;return w=0,n<1048576&&(w-=53,n=Nn(t*=9007199254740992)),w+=(n>>20)-1023|0,n=1072693248|(N=1048575&n|0),N<=235662?E=0:N<767610?E=1:(E=0,w+=1,n-=1048576),e=524288+(n>>1|536870912),o=(b=1/((t=jn(t,n))+(c=An[E])))*((d=t-c)-(u=En(i=d*b,0))*(f=jn(0,e+=E<<18))-u*(t-(f-c))),m=(a=i*i)*a*Pn(a),f=En(f=3+(a=u*u)+(m+=o*(u+i)),0),y=(p=-7.028461650952758e-9*(s=En(s=(d=u*f)+(b=o*f+(m-(f-3-a))*i),0))+.9617966939259756*(b-(s-d))+On[E])-((g=En(g=(l=.9617967009544373*s)+p+(v=_n[E])+(h=w),0))-h-v-l),r[0]=g,r[1]=y,r},he=function(r,t){var n,e,i,a,u;return n=(u=1.9259629911266175e-8*(i=t-1)-1.4426950408889634*(i*i*xn(i)))-((e=Tn(e=(a=1.4426950216293335*i)+u,0))-a),r[0]=e,r[1]=n,r},me=function(r,t,n){var e,i,a,u,o,f,c,v,s,l;return l=((s=2147483647&r|0)>>20)-1023|0,v=0,s>1071644672&&(e=((v=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-l>>>0,r<0&&(v=-v),t-=a=Dn(0,e)),f=(o=.6931471805599453*(n-((a=Jn(a=n+t,0))-t))+-1.904654299957768e-9*a)-((c=(u=.6931471824645996*a)+o)-u),i=c-(a=c*c)*re(a),r=Yn(c=1-(c*i/(i-2)-(f+c*f)-c)),r=Kn(r),c=(r+=v<<20>>>0)>>20<=0?Qn(c,v):Dn(c,r)},de=1e300,be=[0,0],we=[0,0];var Ne=function r(t,n){var e,i,a,u,o,f,c,v,s,l,p,g,y,h;if(te(t)||te(n))return NaN;if(oe(be,n),o=be[0],0===be[1]){if(0===n)return 1;if(1===n)return t;if(-1===n)return 1/t;if(.5===n)return ae(t);if(-.5===n)return 1/ae(t);if(2===n)return t*t;if(3===n)return t*t*t;if(4===n)return(t*=t)*t;if(ee(n))return ge(t,n)}if(oe(be,t),u=be[0],0===be[1]){if(0===u)return le(t,n);if(1===t)return 1;if(-1===t&&ne(n))return-1;if(ee(t))return t===ve?r(-0,-n):n<0?0:se}if(t<0&&!1===ie(n))return(t-t)/(t-t);if(a=ue(t),e=2147483647&u|0,i=2147483647&o|0,c=o>>>31|0,f=(f=u>>>31|0)&&ne(n)?-1:1,i>1105199104){if(i>1139802112)return pe(t,n);if(e<1072693247)return 1===c?f*de*de:1e-300*f*1e-300;if(e>1072693248)return 0===c?f*de*de:1e-300*f*1e-300;p=he(we,a)}else p=ye(we,a,e);if(l=(n-(v=fe(n,0)))*p[0]+n*p[1],s=v*p[0],oe(be,g=l+s),y=ce(be[0]),h=ce(be[1]),y>=1083179008){if(0!=(y-1083179008|h))return f*de*de;if(l+8008566259537294e-32>g-s)return f*de*de}else if((2147483647&y)>=1083231232){if(0!=(y-3230714880|h))return 1e-300*f*1e-300;if(l<=g-s)return 1e-300*f*1e-300}return f*(g=me(y,s,l))},Ee=Ne,je=ir,Pe=gt,Ae=.5019328882303191/Ee(4-Pe,1.5);var _e=function(r){return je(r)||r<0?NaN:Ae},Oe=ir,Te=bt(.8584073464102069);var xe=function(r){return Oe(r)||r<0?NaN:Te*r/1.4142135623730951},Ve=ir;var Se=function(r){return Ve(r)||r<0?NaN:.8584073464102069*r*r/2},ke=Math.ceil,Ue=At,Ie=ke;var Fe=zn,Me=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Re=ir,$e=function(r){return r<0?Ie(r):Ue(r)},Ge=rt,Ce=St,Le=function(r,t,n){var e,i,a;return a=(e=r-t)-(i=e*e)*Me(i),Fe(1-(t-e*a/(2-a)-r),n)};var He=function(r){var t;return Re(r)||r===Ce?r:r===Ge?0:r>709.782712893384?Ce:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(t=$e(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),Le(r-.6931471803691238*t,1.9082149292705877e-10*t,t))},We=ir,Be=He,Ze=Ee;var Xe=function(r,t){var n;return We(r)||We(t)||t<0?NaN:0===t?r<0?0:1:r<0?0:(n=Ze(t,2),1-Be(-Ze(r,2)/(2*n)))};var qe=function(r){return function(){return r}},ze=ir;var Ye=qe,De=ir;var Je=function(r,t){return ze(r)||ze(t)?NaN:r<t?0:1};h(Je,"factory",(function(r){return De(r)?Ye(NaN):function(t){if(De(t))return NaN;return t<r?0:1}}));var Ke=qe,Qe=Je.factory,ri=ir,ti=He,ni=Ee;var ei=Xe;h(ei,"factory",(function(r){var t;return ri(r)||r<0?Ke(NaN):0===r?Qe(0):(t=ni(r,2),function(r){if(ri(r))return NaN;if(r<0)return 0;return 1-ti(-ni(r,2)/(2*t))})}));var ii=ei;var ai=ir,ui=qr,oi=Qr,fi=St,ci=rt,vi=function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313},si=.6931471803691238,li=1.9082149292705877e-10;var pi=function(r){var t,n,e,i,a,u,o,f,c,v,s,l;if(r===fi||ai(r))return r;if(r===ci)return-1;if(0===r)return r;if(r<0?(n=!0,o=-r):(n=!1,o=r),o>=38.816242111356935){if(n)return-1;if(o>=709.782712893384)return fi}if(a=0|ui(o),o>.34657359027997264)o<1.0397207708399179?n?(e=r+si,i=-li,l=-1):(e=r-si,i=li,l=1):(l=n?1.4426950408889634*r-.5:1.4426950408889634*r+.5,e=r-(v=l|=0)*si,i=v*li),c=e-(r=e-i)-i;else{if(a<1016070144)return r;l=0}return s=(f=r*(t=.5*r))*(((u=1+f*vi(f))-(v=3-u*t))/(6-r*v)),0===l?r-(r*s-f):(s=r*(s-c)-c,s-=f,-1===l?.5*(r-s)-.5:1===l?r<-.25?-2*(s-(r+.5)):1+2*(r-s):l<=-2||l>56?(e=ui(o=1-(s-r))+(l<<20)|0,(o=oi(o,e))-1):(v=1,l<20?o=(v=oi(v,e=1072693248-(2097152>>l)|0))-(s-r):(o=r-(s+(v=oi(v,e=1023-l<<20|0))),o+=1),e=ui(o)+(l<<20)|0,oi(o,e)))};var gi=ir,yi=qr,hi=Qr,mi=St,di=rt,bi=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},wi=.6931471803691238,Ni=1.9082149292705877e-10;var Ei=function(r){var t,n,e,i,a,u,o,f,c,v;if(r<-1||gi(r))return NaN;if(-1===r)return di;if(r===mi)return r;if(0===r)return r;if(v=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(v=0,i=r,n=1)}return 0!==v&&(e<9007199254740992?(a=(v=((n=yi(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),a/=c):(v=((n=yi(c=r))>>20)-1023,a=0),(n&=1048575)<434334?c=hi(c,1072693248|n):(v+=1,c=hi(c,1071644672|n),n=1048576-n>>2),i=c-1),t=.5*i*i,0===n?0===i?v*wi+(a+=v*Ni):v*wi-((f=t*(1-.6666666666666666*i))-(v*Ni+a)-i):(f=(o=(u=i/(2+i))*u)*bi(o),0===v?i-(t-u*(t+f)):v*wi-(t-(u*(t+f)+(v*Ni+a))-i))},ji=Ei,Pi=pi,Ai=ir,_i=ji,Oi=He,Ti=Ee,xi=vt,Vi=rt;var Si=function(r,t){var n,e;return Ai(r)||Ai(t)||t<0?NaN:0===t?r<0?Vi:0:r<0?Vi:(n=Ti(t,2),(e=-Ti(r,2)/(2*n))<-.6931471805599453?_i(-Oi(e)):xi(-Pi(e)))},ki=ir,Ui=rt;var Ii=qe,Fi=ir,Mi=rt;var Ri=function(r,t){return ki(r)||ki(t)?NaN:r<t?Ui:0};h(Ri,"factory",(function(r){return Fi(r)?Ii(NaN):function(t){if(Fi(t))return NaN;return t<r?Mi:0}}));var $i=qe,Gi=Ri.factory,Ci=pi,Li=ir,Hi=ji,Wi=He,Bi=Ee,Zi=vt,Xi=rt;var qi=Si;h(qi,"factory",(function(r){var t;return Li(r)||r<0?$i(NaN):0===r?Gi(0):(t=Bi(r,2),function(r){var n;if(Li(r))return NaN;if(r<0)return Xi;return(n=-Bi(r,2)/(2*t))<-.6931471805599453?Hi(-Wi(n)):Zi(-Ci(n))})}));var zi=qi,Yi=ir,Di=Ee,Ji=vt,Ki=St,Qi=rt;var ra=function(r,t){var n;return Yi(r)||Yi(t)||t<0?NaN:0===t?0===r?Ki:Qi:r<0||r===Ki?Qi:(n=Di(t,2),Ji(1/n*r)-Di(r,2)/(2*n))},ta=St,na=rt,ea=ir;var ia=qe,aa=St,ua=rt,oa=ir;var fa=function(r,t){return ea(r)||ea(t)?NaN:r===t?ta:na};h(fa,"factory",(function(r){return oa(r)?ia(NaN):function(t){if(oa(t))return NaN;return t===r?aa:ua}}));var ca=qe,va=fa.factory,sa=ir,la=Ee,pa=vt,ga=St,ya=rt;var ha=ra;h(ha,"factory",(function(r){var t,n;return sa(r)||r<0?ca(NaN):0===r?va(0):(n=la(r,2),t=1/n,function(r){if(sa(r))return NaN;if(r<0||r===ga)return ya;return pa(t*r)-la(r,2)/(2*n)})}));var ma=ha;var da=ir,ba=He,wa=Jt,Na=St,Ea=rt,ja=function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015},Pa=function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))},Aa=function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)},_a=function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))},Oa=function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818},Ta=function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))},xa=function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523},Va=function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))},Sa=.8450629115104675;var ka=function(r){var t,n,e,i,a,u,o;return da(r)?NaN:r===Na?1:r===Ea?-1:0===r?r:(r<0?(t=!0,n=-r):(t=!1,n=r),n<.84375?n<3.725290298461914e-9?n<2848094538889218e-321?.125*(8*r+1.0270333367641007*r):r+.1283791670955126*r:r+r*((i=.12837916709551256+(e=r*r)*ja(e))/(a=1+e*Pa(e))):n<1.25?(u=(a=n-1)*Aa(a)-.0023621185607526594,o=1+a*_a(a),t?-Sa-u/o:Sa+u/o):n>=6?t?-1:1:(a=1/(n*n),n<2.857142857142857?(i=a*Oa(a)-.009864944034847148,a=1+a*Ta(a)):(i=a*xa(a)-.0098649429247001,a=1+a*Va(a)),e=wa(n,0),i=ba(-e*e-.5625)*ba((e-n)*(e+n)+i/a),t?i/n-1:1-i/n))},Ua=ir,Ia=He,Fa=ka;var Ma=qe,Ra=ir,$a=He,Ga=ka;var Ca=function(r,t){var n,e;return Ua(r)||Ua(t)||t<0?NaN:(e=1+(n=r*t)*Ia(n*n/2),e*=1.2533141373155003*(Fa(n/1.4142135623730951)+1))};h(Ca,"factory",(function(r){return Ra(r)||r<0?Ma(NaN):function(t){var n,e;if(Ra(t))return NaN;return e=1+(n=t*r)*$a(n*n/2),e*=1.2533141373155003*(Ga(n/1.4142135623730951)+1)}}));var La=Ca,Ha=ir,Wa=He,Ba=Ee,Za=St;var Xa=function(r,t){var n;return Ha(r)||Ha(t)||t<0?NaN:0===t?0===r?Za:0:r<0||r===Za?0:1/(n=Ba(t,2))*r*Wa(-Ba(r,2)/(2*n))},qa=St,za=ir;var Ya=qe,Da=St,Ja=ir;var Ka=function(r,t){return za(r)||za(t)?NaN:r===t?qa:0};h(Ka,"factory",(function(r){return Ja(r)?Ya(NaN):function(t){if(Ja(t))return NaN;return t===r?Da:0}}));var Qa=qe,ru=Ka.factory,tu=ir,nu=He,eu=Ee,iu=St;var au=Xa;h(au,"factory",(function(r){var t,n;return tu(r)||r<0?Qa(NaN):0===r?ru(0):(n=eu(r,2),t=1/n,function(r){if(tu(r))return NaN;if(r<0||r===iu)return 0;return t*r*nu(-eu(r,2)/(2*n))})}));var uu=au,ou=ir,fu=ji,cu=bt;var vu=function(r,t){return ou(t)||t<0||ou(r)||r<0||r>1?NaN:0===t?0:cu(-2*(t*t)*fu(-r))},su=ir;var lu=qe,pu=ir;var gu=function(r,t){return su(r)||r<0||r>1?NaN:t};h(gu,"factory",(function(r){return pu(r)?lu(NaN):function(t){if(pu(t)||t<0||t>1)return NaN;return r}}));var yu=qe,hu=gu.factory,mu=ir,du=ji,bu=bt;var wu=vu;h(wu,"factory",(function(r){var t;return mu(r)||r<0?yu(NaN):0===r?hu(0):(t=r*r,function(r){if(mu(r)||r<0||r>1)return NaN;return bu(-2*t*du(-r))})}));var Nu=wu;var Eu=function(r){return"string"==typeof r},ju=String.prototype.valueOf;var Pu=I,Au=function(r){try{return ju.call(r),!0}catch(r){return!1}},_u=E();var Ou=function(r){return"object"==typeof r&&(r instanceof String||(_u?Au(r):"[object String]"===Pu(r)))},Tu=Eu,xu=Ou;var Vu=h,Su=function(r){return Tu(r)||xu(r)},ku=Ou;Vu(Su,"isPrimitive",Eu),Vu(Su,"isObject",ku);var Uu=Su,Iu=Ot;var Fu=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Iu(r.length)&&r.length>=0&&r.length<=9007199254740991},Mu=St,Ru=rt,$u=Ot;var Gu=function(r){return r<Mu&&r>Ru&&$u(r)},Cu=q.isPrimitive,Lu=Gu;var Hu=function(r){return Cu(r)&&Lu(r)},Wu=q.isObject,Bu=Gu;var Zu=function(r){return Wu(r)&&Bu(r.valueOf())},Xu=Hu,qu=Zu;var zu=h,Yu=function(r){return Xu(r)||qu(r)},Du=Zu;zu(Yu,"isPrimitive",Hu),zu(Yu,"isObject",Du);var Ju=Yu,Ku=q.isPrimitive,Qu=ir;var ro=function(r){return Ku(r)&&Qu(r)},to=q.isObject,no=ir;var eo=function(r){return to(r)&&no(r.valueOf())},io=ro,ao=eo;var uo=h,oo=function(r){return io(r)||ao(r)},fo=eo;uo(oo,"isPrimitive",ro),uo(oo,"isObject",fo);var co=Fu,vo=Ju.isPrimitive,so=Uu.isPrimitive,lo=oo.isPrimitive;var po=function(r,t,n){var e,i,a;if(!co(r)&&!so(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!vo(n))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+n+"`.");(i=n)<0&&(i=0)}else i=0;if(so(r)){if(!so(t))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+t+"`.");return-1!==r.indexOf(t,i)}if(e=r.length,lo(t)){for(a=i;a<e;a++)if(lo(r[a]))return!0;return!1}for(a=i;a<e;a++)if(r[a]===t)return!0;return!1},go=Uu.isPrimitive;var yo=function(r){if(!go(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},ho=Uu.isPrimitive;var mo=function(r){if(!ho(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},bo=yo,wo=mo,No=Uu.isPrimitive;var Eo=function(r){return No(r)&&r===wo(r)&&r!==bo(r)},jo=St,Po=rt;var Ao=function(r){return r==r&&r>Po&&r<jo},_o=Ju.isPrimitive;var Oo=function(r){return _o(r)&&r>=0},To=Ju.isObject;var xo=function(r){return To(r)&&r.valueOf()>=0},Vo=Oo,So=xo;var ko=h,Uo=function(r){return Vo(r)||So(r)},Io=xo;ko(Uo,"isPrimitive",Oo),ko(Uo,"isObject",Io);var Fo=Uo.isPrimitive,Mo=Uu.isPrimitive;var Ro=function(r,t){var n,e;if(!Mo(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Fo(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(0===r.length||0===t)return"";if(r.length*t>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(n="",e=t;1==(1&e)&&(n+=r),0!==(e>>>=1);)r+=r;return n},$o=Ju.isPrimitive,Go=Uu.isPrimitive;var Co=Ro,Lo=function(r,t,n){var e,i;if(!Go(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!Go(t))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+t+"`.");if(arguments.length>2){if(!$o(n))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+n+"`.");e=n<0?r.length+n:n}else e=0;if(0===t.length)return!0;if(e<0||e+t.length>r.length)return!1;for(i=0;i<t.length;i++)if(r.charCodeAt(e+i)!==t.charCodeAt(i))return!1;return!0};var Ho=function(r,t,n){var e=!1,i=t-r.length;return i<0||(Lo(r,"-")&&(e=!0,r=r.substr(1)),r=n?r+Co("0",i):Co("0",i)+r,e&&(r="-"+r)),r},Wo=Eo,Bo=mo,Zo=yo,Xo=Ao,qo=q.isPrimitive,zo=Ho;var Yo=function(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!Xo(e)){if(!qo(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=zo(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=zo(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=Wo(r.specifier)?Bo(n):Zo(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n},Do=Uu.isPrimitive,Jo=/[-\/\\^$*+?.()|[\]{}]/g;var Ko=function(r){var t,n;if(!Do(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(n=r.length-1;n>=0&&"/"!==r[n];n--);return void 0===n||n<=0?r.replace(Jo,"\\$&"):(t=(t=r.substring(1,n)).replace(Jo,"\\$&"),r=r[0]+t+r.substring(n))},Qo=/./;var rf=function(r){return"boolean"==typeof r},tf=Boolean.prototype.toString;var nf=I,ef=function(r){try{return tf.call(r),!0}catch(r){return!1}},af=E();var uf=function(r){return"object"==typeof r&&(r instanceof Boolean||(af?ef(r):"[object Boolean]"===nf(r)))},of=rf,ff=uf;var cf=h,vf=function(r){return of(r)||ff(r)},sf=uf;cf(vf,"isPrimitive",rf),cf(vf,"isObject",sf);var lf="object"==typeof self?self:null,pf="object"==typeof window?window:null,gf=vf.isPrimitive,yf=function(){return new Function("return this;")()},hf=lf,mf=pf,df=r(Object.freeze({__proto__:null}));var bf=function(r){if(arguments.length){if(!gf(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return yf()}if(hf)return hf;if(mf)return mf;if(df)return df;throw new Error("unexpected error. Unable to resolve global object.")},wf=bf(),Nf=wf.document&&wf.document.childNodes,Ef=Int8Array,jf=Qo,Pf=Nf,Af=Ef;var _f=function(){return"function"==typeof jf||"object"==typeof Af||"function"==typeof Pf};var Of=function(){return/^\s*function\s*([^(]*)/i},Tf=Of;h(Tf,"REGEXP",Of());var xf=Tf,Vf=I;var Sf=Array.isArray?Array.isArray:function(r){return"[object Array]"===Vf(r)};var kf=function(r){return null!==r&&"object"==typeof r};h(kf,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!Sf(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(kf));var Uf=kf;var If=I,Ff=xf.REGEXP,Mf=function(r){return Uf(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Rf=function(r){var t,n,e;if(("Object"===(n=If(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Ff.exec(e.toString()))return t[1]}return Mf(r)?"Buffer":n},$f=Rf;var Gf=Rf;var Cf=function(r){var t;return null===r?"null":"object"===(t=typeof r)?$f(r).toLowerCase():t},Lf=function(r){return Gf(r).toLowerCase()},Hf=_f()?Lf:Cf;var Wf=function(r){return"function"===Hf(r)},Bf=RegExp.prototype.exec;var Zf=I,Xf=function(r){try{return Bf.call(r),!0}catch(r){return!1}},qf=E();var zf=Ko,Yf=Wf,Df=Uu.isPrimitive,Jf=function(r){return"object"==typeof r&&(r instanceof RegExp||(qf?Xf(r):"[object RegExp]"===Zf(r)))};var Kf=Eo,Qf=mo,rc=yo,tc=function(r,t,n){if(!Df(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Df(t))t=zf(t),t=new RegExp(t,"g");else if(!Jf(t))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+t+"`.");if(!Df(n)&&!Yf(n))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+n+"`.");return r.replace(t,n)},nc=Ao,ec=q.isPrimitive,ic=Rt,ac=/e\+(\d)$/,uc=/e-(\d)$/,oc=/^(\d+)$/,fc=/^(\d+)e/,cc=/\.0$/,vc=/\.0*e/,sc=/(\..*[^0])0*e/;var lc=function(r){var t,n,e=parseFloat(r.arg);if(!nc(e)){if(!ec(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":ic(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=tc(n,sc,"$1e"),n=tc(n,vc,"e"),n=tc(n,cc,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=tc(n,ac,"e+0$1"),n=tc(n,uc,"e-0$1"),r.alternate&&(n=tc(n,oc,"$1."),n=tc(n,fc,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=Kf(r.specifier)?Qf(n):rc(n)},pc=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var gc=Ro;var yc=Uu.isPrimitive,hc=po,mc=ir,dc=Yo,bc=lc,wc=function(r){var t,n,e,i,a;for(t=0,e=[],a=pc.exec(r);a;)(n=r.slice(t,pc.lastIndex-a[0].length)).length&&e.push(n),(i=u(a,e.length))&&e.push(i),t=pc.lastIndex,a=pc.exec(r);return(n=r.slice(t)).length&&e.push(n),e;function u(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Nc=function(r,t,n){var e=t-r.length;return e<0?r:r=n?r+gc(" ",e):gc(" ",e)+r},Ec=Ho,jc=String.fromCharCode;var Pc=p,Ac=h,_c=b,Oc=er.isPrimitive,Tc=pt,xc=ht,Vc=dt,Sc=Et,kc=Pt,Uc=_e,Ic=xe,Fc=Se,Mc=ii,Rc=zi,$c=ma,Gc=La,Cc=uu,Lc=Nu,Hc=function(r){var t,n,e,i,a,u,o,f,c;if(!yc(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(t=wc(r),u="",o=1,f=0;f<t.length;f++)if(e=t[f],yc(e))u+=e;else{for(e.mapping&&(o=e.mapping),n=e.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=!hc(n,"-");break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[o],10),o+=1,mc(e.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if("*"===e.precision&&e.hasPeriod){if(e.precision=parseInt(arguments[o],10),o+=1,mc(e.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,e.hasPeriod=!1)}switch(e.arg=arguments[o],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e.hasPeriod&&(e.padZeros=!1),e.arg=dc(e);break;case"s":e.maxWidth=e.hasPeriod?e.precision:-1;break;case"c":if(!mc(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=mc(a)?String(e.arg):jc(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e.hasPeriod||(e.precision=6),e.arg=bc(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=Ec(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=Nc(e.arg,e.width,e.padRight)),u+=e.arg||"",o+=1}return u};function Wc(){var r;if(!(this instanceof Wc))return 0===arguments.length?new Wc:new Wc(arguments[0]);if(arguments.length){if(!Oc(r=arguments[0]))throw new TypeError(Hc("invalid argument. Scale parameter `sigma` must be a positive number. Value: `%s`.",r))}else r=1;return Pc(this,"sigma",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!Oc(t))throw new TypeError(Hc("invalid value. Must be a positive number. Value: `%s`.",t));r=t}}),this}_c(Wc.prototype,"entropy",(function(){return Tc(this.sigma)})),_c(Wc.prototype,"kurtosis",(function(){return xc(this.sigma)})),_c(Wc.prototype,"mean",(function(){return Vc(this.sigma)})),_c(Wc.prototype,"median",(function(){return Sc(this.sigma)})),_c(Wc.prototype,"mode",(function(){return kc(this.sigma)})),_c(Wc.prototype,"skewness",(function(){return Uc(this.k,this.sigma)})),_c(Wc.prototype,"stdev",(function(){return Ic(this.sigma)})),_c(Wc.prototype,"variance",(function(){return Fc(this.sigma)})),Ac(Wc.prototype,"cdf",(function(r){return Mc(r,this.sigma)})),Ac(Wc.prototype,"logcdf",(function(r){return Rc(r,this.sigma)})),Ac(Wc.prototype,"logpdf",(function(r){return $c(r,this.sigma)})),Ac(Wc.prototype,"mgf",(function(r){return Gc(r,this.sigma)})),Ac(Wc.prototype,"pdf",(function(r){return Cc(r,this.sigma)})),Ac(Wc.prototype,"quantile",(function(r){return Lc(r,this.sigma)}));var Bc=Wc;export{Bc as default};
//# sourceMappingURL=mod.js.map
