"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[38],{3939:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=r(4848),t=r(8453);const i={},s="Pertemuan 1",l={id:"pemrograman-mobile-lanjut-2024/pertemuan-1",title:"Pertemuan 1",description:"Struktur Folder Flutter",source:"@site/docs/pemrograman-mobile-lanjut-2024/pertemuan-1.md",sourceDirName:"pemrograman-mobile-lanjut-2024",slug:"/pemrograman-mobile-lanjut-2024/pertemuan-1",permalink:"/docs/pemrograman-mobile-lanjut-2024/pertemuan-1",draft:!1,unlisted:!1,editUrl:"https://github.com/khanifzyen/ghpages/tree/main/packages/create-docusaurus/templates/shared/docs/pemrograman-mobile-lanjut-2024/pertemuan-1.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PML - 2024",permalink:"/docs/category/pml---2024"},next:{title:"Tutorial - Basics",permalink:"/docs/category/tutorial---basics"}},d={},o=[{value:"Struktur Folder Flutter",id:"struktur-folder-flutter",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"pertemuan-1",children:"Pertemuan 1"}),"\n",(0,a.jsx)(n.h2,{id:"struktur-folder-flutter",children:"Struktur Folder Flutter"}),"\n",(0,a.jsx)(n.p,{children:"Berikut adalah struktur proyek Flutter yang direkomendasikan untuk pemula:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"lib/\n\u251c\u2500\u2500 main.dart\n\u2502\n\u251c\u2500\u2500 pages/\n\u2502   \u251c\u2500\u2500 home_page.dart\n\u2502   \u251c\u2500\u2500 profile_page.dart\n\u2502   \u251c\u2500\u2500 settings_page.dart\n\u2502   \u2514\u2500\u2500 splash_page.dart\n\u2502\n\u251c\u2500\u2500 widgets/\n\u2502   \u251c\u2500\u2500 custom_button.dart\n\u2502   \u251c\u2500\u2500 custom_card.dart\n\u2502   \u2514\u2500\u2500 loading_indicator.dart\n\u2502\n\u251c\u2500\u2500 models/\n\u2502   \u251c\u2500\u2500 user.dart\n\u2502   \u251c\u2500\u2500 product.dart\n\u2502   \u2514\u2500\u2500 api/\n\u2502       \u251c\u2500\u2500 login_request.dart\n\u2502       \u2514\u2500\u2500 login_response.dart\n\u2502\n\u251c\u2500\u2500 providers/\n\u2502   \u251c\u2500\u2500 auth_provider.dart\n\u2502   \u2514\u2500\u2500 theme_provider.dart\n\u2502\n\u251c\u2500\u2500 services/\n\u2502   \u251c\u2500\u2500 api_service.dart\n\u2502   \u2514\u2500\u2500 storage_service.dart\n\u2502\n\u251c\u2500\u2500 utils/\n\u2502   \u251c\u2500\u2500 constants.dart\n\u2502   \u2514\u2500\u2500 helpers.dart\n\u2502\n\u2514\u2500\u2500 config/\n    \u251c\u2500\u2500 themes.dart\n    \u2514\u2500\u2500 routes.dart\n"})}),"\n",(0,a.jsx)(n.p,{children:"Penjelasan struktur folder:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"main.dart"}),": Titik masuk utama aplikasi."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"pages/"}),": Berisi semua halaman atau layar dalam aplikasi. Setiap file biasanya berisi satu widget StatelessWidget atau StatefulWidget yang mewakili seluruh layar."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"widgets/"}),": Berisi widget yang dapat digunakan kembali di seluruh aplikasi. Ini membantu dalam memecah UI menjadi komponen yang lebih kecil dan dapat dikelola."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"models/"}),": Berisi kelas-kelas yang merepresentasikan data dalam aplikasi."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Subfolder ",(0,a.jsx)(n.code,{children:"api/"})," dapat berisi model khusus untuk request dan response API."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"providers/"}),": Berisi provider Riverpod untuk manajemen state. Setiap file biasanya berfokus pada satu fitur atau bagian dari state aplikasi."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"services/"}),": Berisi logika bisnis dan interaksi dengan API eksternal atau penyimpanan lokal."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"utils/"}),": Berisi fungsi utilitas, konstanta, dan helper yang digunakan di seluruh aplikasi."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"config/"}),": Berisi file konfigurasi seperti tema aplikasi dan konfigurasi rute."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Contoh implementasi sederhana untuk beberapa file:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"lib/main.dart"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter/material.dart';\nimport 'package:flutter_riverpod/flutter_riverpod.dart';\nimport 'package:go_router/go_router.dart';\nimport 'config/routes.dart';\n\nvoid main() {\n  runApp(\n    ProviderScope(\n      child: MyApp(),\n    ),\n  );\n}\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp.router(\n      title: 'Flutter Demo',\n      theme: ThemeData(primarySwatch: Colors.blue),\n      routerConfig: goRouter,\n    );\n  }\n}\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"lib/pages/splash_page.dart"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter/material.dart';\nimport 'package:flutter_riverpod/flutter_riverpod.dart';\nimport 'package:go_router/go_router.dart';\nimport '../providers/auth_provider.dart';\n\nclass SplashPage extends ConsumerWidget {\n  @override\n  Widget build(BuildContext context, WidgetRef ref) {\n    ref.listen<AsyncValue<bool>>(\n      authProvider,\n      (_, state) => state.whenData((isLoggedIn) {\n        context.go(isLoggedIn ? '/home' : '/login');\n      }),\n    );\n\n    return Scaffold(\n      body: Center(\n        child: CircularProgressIndicator(),\n      ),\n    );\n  }\n}\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"lib/providers/auth_provider.dart"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter_riverpod/flutter_riverpod.dart';\nimport '../services/api_service.dart';\n\nfinal authProvider = FutureProvider<bool>((ref) async {\n  final apiService = ref.read(apiServiceProvider);\n  return await apiService.checkLoginStatus();\n});\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"lib/config/routes.dart:"}),":"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-dart",children:"import 'package:go_router/go_router.dart';\nimport '../pages/splash_page.dart';\nimport '../pages/home_page.dart';\nimport '../pages/login_page.dart';\n\nfinal goRouter = GoRouter(\n  initialLocation: '/',\n  routes: [\n    GoRoute(\n      path: '/',\n      builder: (context, state) => SplashPage(),\n    ),\n    GoRoute(\n      path: '/home',\n      builder: (context, state) => HomePage(),\n    ),\n    GoRoute(\n      path: '/login',\n      builder: (context, state) => LoginPage(),\n    ),\n  ],\n);\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var a=r(6540);const t={},i=a.createContext(t);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);