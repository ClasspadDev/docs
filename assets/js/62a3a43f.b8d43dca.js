"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4819],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),b=l,f=u["".concat(s,".").concat(b)]||u[b]||d[b]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=b;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},2553:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(7462),l=(t(7294),t(3905));const i={},a="Setup the SDK",o={unversionedId:"installing/sdk",id:"installing/sdk",title:"Setup the SDK",description:"This part is aimed at technical people that want to create their own programs.",source:"@site/docs/installing/sdk.md",sourceDirName:"installing",slug:"/installing/sdk",permalink:"/docs/installing/sdk",draft:!1,editUrl:"https://github.com/ClasspadDev/docs/tree/master/docs/docs/installing/sdk.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Install HollyHock2",permalink:"/docs/installing/hollyhock2"},next:{title:"Tutorial - Basics",permalink:"/docs/category/tutorial---basics"}},s={},c=[{value:"About the SDK",id:"about-the-sdk",level:2},{value:"Building the Compiler",id:"building-the-compiler",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"setup-the-sdk"},"Setup the SDK"),(0,l.kt)("p",null,"This part is aimed at technical people that want to create their own programs."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"If you're here for using games, you can ignore this guide"),"."),(0,l.kt)("h2",{id:"about-the-sdk"},"About the SDK"),(0,l.kt)("p",null,"You can find the source at the following page :"),(0,l.kt)("a",{href:"https://github.com/SnailMath/hollyhock-2",target:"_blank",rel:"noreferrer"},(0,l.kt)("img",{alt:"GitHub Repo Preview",src:"https://gh-card.dev/repos/SnailMath/hollyhock-2.svg?fullname="})),(0,l.kt)("h2",{id:"building-the-compiler"},"Building the Compiler"),(0,l.kt)("p",null,"Setup env vars"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export PREFIX="$HOME/opt/cross"\nexport TARGET=sh4eb-elf\nexport PATH="$PREFIX/bin:$PATH"\n\n')),(0,l.kt)("p",null,"Install and build BinUtils"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Install-binutils.sh")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"version=2.37\n\nprefix=~/cross/opt/sh4eb-nofpu-elf\n\njobs=`nproc 2> /dev/null || echo 1`\n\ntar=binutils-${version}.tar.gz\nurl=ftp://ftp.gnu.org/gnu/binutils/$tar\ntest -f $tar || curl -L $url -o $tar\ntar -zxf $tar\n\nmkdir binutils-${version}-build\ncd binutils-${version}-build\n../binutils-${version}/configure --target=sh4eb-nofpu-elf --prefix=$prefix \\\n          --disable-nls --disable-shared --disable-multilib\nmake -j $jobs\nmake install\ncd ..\n")),(0,l.kt)("p",null,"And GCC\n",(0,l.kt)("inlineCode",{parentName:"p"},"Install-gcc.sh")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"version=11.2.0\n\nprefix=~/cross/opt/sh4eb-nofpu-elf\n\njobs=`nproc 2> /dev/null || echo 1`\n\ntar=gcc-${version}.tar.gz\nurl=ftp://ftp.gnu.org/gnu/gcc/gcc-${version}/$tar\ntest -f $tar || curl -L $url -o $tar\ntar -zxf $tar\n\ncd gcc-${version}\n./contrib/download_prerequisites\ncd ..\n\nmkdir gcc-${version}-build\ncd gcc-${version}-build\n../gcc-${version}/configure --target=sh4eb-nofpu-elf --prefix=$prefix \\\n          --enable-languages=c,c++ \\\n            --with-newlib --without-headers --disable-hosted-libstdcxx \\\n              --disable-nls --disable-shared --enable-libssp --enable-lto --with-multilib-list=m4-nofpu\nmake -j $jobs all-gcc all-target-libgcc\nmake install-gcc install-target-libgcc\ncd ..\n")),(0,l.kt)("p",null,"Now NewLib\n",(0,l.kt)("inlineCode",{parentName:"p"},"Install-newlib.sh")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"version=1.14.0\n\nprefix=~/cross/src/hollyhock-2/sdk/newlib\n\njobs=`nproc 2> /dev/null || echo 1`\n\n\nwget ftp://sourceware.org/pub/newlib/newlib-${version}.tar.gz\n\ntar xzfv newlib-${version}.tar.gz\n\nmkdir newlib-${version}-build\ncd newlib-${version}-build\n\nexport TARGET_BINS=\"sh4eb-nofpu-elf\"\n\n../newlib-${version}/configure --target=\"sh-elf\" --prefix=$PREFIX\n\n# Fix CC\ngrep -rli 'sh-elf-' * | xargs -i@ sed -i 's/sh-elf-/sh4eb-nofpu-elf-/g' @\ngrep -rli 'sh4eb-nofpu-elf-cc' * | xargs -i@ sed -i 's/sh4eb-nofpu-elf-cc/sh4eb-nofpu-elf-gcc/g' @\n\nmake -j $jobs\nmake install\ncd ..\n\n")),(0,l.kt)("p",null,"Rebuild Full GCC\n",(0,l.kt)("inlineCode",{parentName:"p"},"Full-gcc.sh")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"version=11.2.0\nprefix=~/cross/opt/sh4eb-nofpu-elf-full\n\nmkdir gcc-${version}-build-full\ncd gcc-${version}-build-full\n\n../gcc-${version}/configure --target=sh4eb-nofpu-elf --prefix=$prefix \\\n          --enable-languages=c,c++ \\\n            --with-newlib --without-headers --disable-hosted-libstdcxx \\\n              --disable-nls --disable-shared --enable-libssp --enable-lto --with-multilib-list=m4-nofpu\n\n")))}u.isMDXComponent=!0}}]);