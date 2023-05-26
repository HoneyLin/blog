import{w as ln,c as I}from"./path-53f90ab3.js";import{av as an,aw as H,ax as D,ay as rn,az as y,at as tn,aA as L,aB as _,aC as un,aD as o,aE as sn,aF as on,aG as fn}from"./mermaid.core-79165fa8.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function xn(l,h,z,E,v,A,O,a){var B=z-l,i=E-h,n=O-v,m=a-A,r=m*B-n*i;if(!(r*r<y))return r=(n*(h-A)-m*(l-v))/r,[l+r*B,h+r*i]}function W(l,h,z,E,v,A,O){var a=l-z,B=h-E,i=(O?A:-A)/L(a*a+B*B),n=i*B,m=-i*a,r=l+n,s=h+m,f=z+n,c=E+m,S=(r+f)/2,t=(s+c)/2,p=f-r,g=c-s,R=p*p+g*g,T=v-A,w=r*c-f*s,C=(g<0?-1:1)*L(fn(0,T*T*R-w*w)),F=(w*g-p*C)/R,G=(-w*p-g*C)/R,P=(w*g+p*C)/R,x=(-w*p+g*C)/R,d=F-S,e=G-t,u=P-S,j=x-t;return d*d+e*e>u*u+j*j&&(F=P,G=x),{cx:F,cy:G,x01:-n,y01:-m,x11:F*(v/T-1),y11:G*(v/T-1)}}function vn(){var l=cn,h=yn,z=I(0),E=null,v=gn,A=mn,O=pn,a=null,B=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=A.apply(this,arguments)-rn,S=un(c-f),t=c>f;if(a||(a=n=B()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if(S>tn-y)a.moveTo(s*H(f),s*D(f)),a.arc(0,0,s,f,c,!t),r>y&&(a.moveTo(r*H(c),r*D(c)),a.arc(0,0,r,c,f,t));else{var p=f,g=c,R=f,T=c,w=S,C=S,F=O.apply(this,arguments)/2,G=F>y&&(E?+E.apply(this,arguments):L(r*r+s*s)),P=_(un(s-r)/2,+z.apply(this,arguments)),x=P,d=P,e,u;if(G>y){var j=sn(G/r*D(F)),M=sn(G/s*D(F));(w-=j*2)>y?(j*=t?1:-1,R+=j,T-=j):(w=0,R=T=(f+c)/2),(C-=M*2)>y?(M*=t?1:-1,p+=M,g-=M):(C=0,p=g=(f+c)/2)}var J=s*H(p),K=s*D(p),N=r*H(T),Q=r*D(T);if(P>y){var U=s*H(g),V=s*D(g),X=r*H(R),Y=r*D(R),q;if(S<an)if(q=xn(J,K,X,Y,U,V,N,Q)){var Z=J-q[0],$=K-q[1],k=U-q[0],b=V-q[1],nn=1/D(on((Z*k+$*b)/(L(Z*Z+$*$)*L(k*k+b*b)))/2),en=L(q[0]*q[0]+q[1]*q[1]);x=_(P,(r-en)/(nn-1)),d=_(P,(s-en)/(nn+1))}else x=d=0}C>y?d>y?(e=W(X,Y,J,K,s,d,t),u=W(U,V,N,Q,s,d,t),a.moveTo(e.cx+e.x01,e.cy+e.y01),d<P?a.arc(e.cx,e.cy,d,o(e.y01,e.x01),o(u.y01,u.x01),!t):(a.arc(e.cx,e.cy,d,o(e.y01,e.x01),o(e.y11,e.x11),!t),a.arc(0,0,s,o(e.cy+e.y11,e.cx+e.x11),o(u.cy+u.y11,u.cx+u.x11),!t),a.arc(u.cx,u.cy,d,o(u.y11,u.x11),o(u.y01,u.x01),!t))):(a.moveTo(J,K),a.arc(0,0,s,p,g,!t)):a.moveTo(J,K),!(r>y)||!(w>y)?a.lineTo(N,Q):x>y?(e=W(N,Q,U,V,r,-x,t),u=W(J,K,X,Y,r,-x,t),a.lineTo(e.cx+e.x01,e.cy+e.y01),x<P?a.arc(e.cx,e.cy,x,o(e.y01,e.x01),o(u.y01,u.x01),!t):(a.arc(e.cx,e.cy,x,o(e.y01,e.x01),o(e.y11,e.x11),!t),a.arc(0,0,r,o(e.cy+e.y11,e.cx+e.x11),o(u.cy+u.y11,u.cx+u.x11),t),a.arc(u.cx,u.cy,x,o(u.y11,u.x11),o(u.y01,u.x01),!t))):a.arc(0,0,r,T,R,t)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-an/2;return[H(m)*n,D(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:I(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:I(+n),i):h},i.cornerRadius=function(n){return arguments.length?(z=typeof n=="function"?n:I(+n),i):z},i.padRadius=function(n){return arguments.length?(E=n==null?null:typeof n=="function"?n:I(+n),i):E},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:I(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:I(+n),i):A},i.padAngle=function(n){return arguments.length?(O=typeof n=="function"?n:I(+n),i):O},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as a};
