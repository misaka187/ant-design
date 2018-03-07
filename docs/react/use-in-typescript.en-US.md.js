webpackJsonp([101],{1814:function(n,s){n.exports={content:["article",{},["h2","Install and Initialization"],["p","Ensure your system has installed latest version of ",["a",{title:null,href:"https://yarnpkg.com"},"yarn"]," or ",["a",{title:null,href:"https://www.npmjs.com/"},"npm"],"."],["p","Create a new project named ",["code","antd-demo-ts"]," using yarn."],["pre",{lang:"bash",highlighted:'$ yarn create react-app antd-demo-ts --scripts-version<span class="token operator">=</span>react-scripts-ts'},["code","$ yarn create react-app antd-demo-ts --scripts-version=react-scripts-ts"]],["p","If you are using npm (we will use yarn in the following instructions, it's ok to replace yarn with npm)"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> -g create-react-app\n$ create-react-app antd-demo-ts --scripts-version<span class="token operator">=</span>react-scripts-ts'},["code","$ npm install -g create-react-app\n$ create-react-app antd-demo-ts --scripts-version=react-scripts-ts"]],["p","Then we go inside ",["code","antd-demo-ts"]," and start it."],["pre",{lang:"bash",highlighted:'$ <span class="token function">cd</span> antd-demo-ts\n$ yarn start'},["code","$ cd antd-demo-ts\n$ yarn start"]],["p","Open browser at ",["a",{title:null,href:"http://localhost:3000/"},"http://localhost:3000/"],', it renders a header saying "Welcome to React" on the page.'],["h2","Import antd"],["pre",{lang:"bash",highlighted:"$ yarn add antd"},["code","$ yarn add antd"]],["p","Modify ",["code","src/App.js"],", import Button component from ",["code","antd"],"."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'antd/lib/button\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'./App.css\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>App<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>'},["code","import * as React from 'react';\nimport Button from 'antd/lib/button';\nimport './App.css';\n\nclass App extends React.Component {\n  render() {\n    return (\n      <div className=\"App\">\n        <Button type=\"primary\">Button</Button>\n      </div>\n    );\n  }\n}\n\nexport default App;"]],["p","Add ",["code","antd/dist/antd.css"]," at the top of ",["code","src/App.css"],"."],["pre",{lang:"css",highlighted:'<span class="token atrule"><span class="token rule">@import</span> <span class="token string">\'~antd/dist/antd.css\'</span><span class="token punctuation">;</span></span>\n\n<span class="token selector"><span class="token class">.App</span> </span><span class="token punctuation">{</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token number">...</span>'},["code","@import '~antd/dist/antd.css';\n\n.App {\n  text-align: center;\n}\n\n..."]],["p","Ok, reboot with ",["code","yarn start"],", you should now see a blue primary button displayed on the page. Next you can choose any components of ",["code","antd"]," to develop your application. Visit other workflows of ",["code","create-react-app"]," at its ",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md"},"User Guide "],"."],["h2","Advanced Guides"],["p","We are successfully running antd components now but in the real world, there are still lots of problems about antd-demo-ts.\nFor instance, we actually import all styles of components in the project which may be a network performance issue."],["p","Now we need to customize the default webpack config. We can achieve that by using ",["a",{title:null,href:"https://github.com/timarney/react-app-rewired"},"react-app-rewired"]," which is one of create-react-app's custom config solutions."],["p","Import react-app-rewired and modify the ",["code","scripts"]," field in package.json."],["pre",{lang:null,highlighted:'$ yarn add react<span class="token operator">-</span>app<span class="token operator">-</span>rewired <span class="token operator">-</span><span class="token operator">-</span>dev'},["code","$ yarn add react-app-rewired --dev"]],["pre",{lang:"diff",highlighted:'/* package.json */\n"scripts": {\n<span class="token deleted">-   "start": "react-scripts start",</span>\n<span class="token inserted">+   "start": "react-app-rewired start --scripts-version react-scripts-ts",</span>\n<span class="token deleted">-   "build": "react-scripts build",</span>\n<span class="token inserted">+   "build": "react-app-rewired build --scripts-version react-scripts-ts",</span>\n<span class="token deleted">-   "test": "react-scripts test --env=jsdom",</span>\n<span class="token inserted">+   "test": "react-app-rewired test --env=jsdom --scripts-version react-scripts-ts",</span>\n}'},["code",'/* package.json */\n"scripts": {\n-   "start": "react-scripts start",\n+   "start": "react-app-rewired start --scripts-version react-scripts-ts",\n-   "build": "react-scripts build",\n+   "build": "react-app-rewired build --scripts-version react-scripts-ts",\n-   "test": "react-scripts test --env=jsdom",\n+   "test": "react-app-rewired test --env=jsdom --scripts-version react-scripts-ts",\n}']],["p","Then create a ",["code","config-overrides.js"]," at root directory of your project for further overriding."],["pre",{lang:"js",highlighted:'module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">override</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> env<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// do stuff with the webpack config...</span>\n  <span class="token keyword">return</span> config<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","module.exports = function override(config, env) {\n  // do stuff with the webpack config...\n  return config;\n};"]],["h3","Use ts-import-plugin"],["p",["a",{title:null,href:"https://github.com/Brooooooklyn/ts-import-plugin"},"ts-import-plugin"]," is a TypeScript plugin for importing components on demand (",["a",{title:null,href:"/docs/react/getting-started#Import-on-Demand"},"How does it work?"],"). We are now trying to install it and modify ",["code","config-overrides.js"],"."],["pre",{lang:"bash",highlighted:"$ yarn add ts-import-plugin --dev"},["code","$ yarn add ts-import-plugin --dev"]],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">/* config-overrides.js */</span>\n<span class="token keyword">const</span> tsImportPluginFactory <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'ts-import-plugin\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> getLoader <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"react-app-rewired"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">override</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> env<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> tsLoader <span class="token operator">=</span> <span class="token function">getLoader</span><span class="token punctuation">(</span>\n    config<span class="token punctuation">.</span>module<span class="token punctuation">.</span>rules<span class="token punctuation">,</span>\n    rule <span class="token operator">=</span><span class="token operator">></span>\n      rule<span class="token punctuation">.</span>loader <span class="token operator">&amp;&amp;</span>\n      <span class="token keyword">typeof</span> rule<span class="token punctuation">.</span>loader <span class="token operator">===</span> <span class="token string">\'string\'</span> <span class="token operator">&amp;&amp;</span>\n      rule<span class="token punctuation">.</span>loader<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">\'ts-loader\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  tsLoader<span class="token punctuation">.</span>options <span class="token operator">=</span> <span class="token punctuation">{</span>\n    getCustomTransformers<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n      before<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token function">tsImportPluginFactory</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        libraryName<span class="token punctuation">:</span> <span class="token string">\'antd\'</span><span class="token punctuation">,</span>\n        libraryDirectory<span class="token punctuation">:</span> <span class="token string">\'es\'</span><span class="token punctuation">,</span>\n        style<span class="token punctuation">:</span> <span class="token string">\'css\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> config<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","/* config-overrides.js */\nconst tsImportPluginFactory = require('ts-import-plugin')\nconst { getLoader } = require(\"react-app-rewired\");\n\nmodule.exports = function override(config, env) {\n  const tsLoader = getLoader(\n    config.module.rules,\n    rule =>\n      rule.loader &&\n      typeof rule.loader === 'string' &&\n      rule.loader.includes('ts-loader')\n  );\n\n  tsLoader.options = {\n    getCustomTransformers: () => ({\n      before: [ tsImportPluginFactory({\n        libraryName: 'antd',\n        libraryDirectory: 'es',\n        style: 'css',\n      }) ]\n    })\n  };\n\n  return config;\n}"]],["p","Remove the ",["code","@import '~antd/dist/antd.css';"]," statement added before because ",["code","babel-plugin-import"]," will import styles and import components like below:"],["pre",{lang:"diff",highlighted:"import * as React from 'react';\nimport { Button } from 'antd';\nimport './App.css';\n\nclass App extends React.Component {\n  render() {\n    return (\n      &lt;div className=\"App\">\n        &lt;Button type=\"primary\">Button&lt;/Button>\n      &lt;/div>\n    );\n  }\n}\n\nexport default App;"},["code","import * as React from 'react';\nimport { Button } from 'antd';\nimport './App.css';\n\nclass App extends React.Component {\n  render() {\n    return (\n      <div className=\"App\">\n        <Button type=\"primary\">Button</Button>\n      </div>\n    );\n  }\n}\n\nexport default App;"]],["p","Then reboot with ",["code","yarn start"]," and visit the demo page, you should not find any ",["a",{title:null,href:"https://zos.alipayobjects.com/rmsportal/vgcHJRVZFmPjAawwVoXK.png"},"warning messages"]," in the console, which prove that the ",["code","import on demand"]," config is working now. You will find more info about it in ",["a",{title:null,href:"/docs/react/getting-started#Import-on-Demand"},"this guide"],"."],["h3","Customize Theme"],["p","According to the ",["a",{title:null,href:"/docs/react/customize-theme"},"Customize Theme documentation"],", to customize the theme, we need to modify ",["code","less"]," variables with tools such as ",["a",{title:null,href:"https://github.com/webpack/less-loader"},"less-loader"],". We can also use ",["a",{title:null,href:"http://npmjs.com/react-app-rewire-less"},"react-app-rewire-less"]," to achieve this. Import it and modify ",["code","config-overrides.js"]," like below."],["pre",{lang:"bash",highlighted:"$ yarn add react-app-rewire-less --dev"},["code","$ yarn add react-app-rewire-less --dev"]],["pre",{lang:"diff",highlighted:'  const tsImportPluginFactory = require(\'ts-import-plugin\')\n  const { getLoader } = require("react-app-rewired");\n<span class="token inserted">+ const rewireLess = require(\'react-app-rewire-less\');</span>\n\n  module.exports = function override(config) {\n    const tsLoader = getLoader(\n      config.module.rules,\n      rule =>\n        rule.loader &amp;&amp;\n        typeof rule.loader === \'string\' &amp;&amp;\n        rule.loader.includes(\'ts-loader\')\n    );\n\n    tsLoader.options = {\n      getCustomTransformers: () => ({\n        before: [ tsImportPluginFactory({\n          libraryName: \'antd\',\n          libraryDirectory: \'es\',\n<span class="token deleted">-         style: \'css\',</span>\n<span class="token inserted">+         style: true,</span>\n        }) ]\n      })\n    };\n\n<span class="token inserted">+   config = rewireLess.withLoaderOptions({</span>\n<span class="token inserted">+     modifyVars: { "@primary-color": "#1DA57A" },</span>\n<span class="token inserted">+   })(config, env);</span>\n\n    return config;\n  }'},["code","  const tsImportPluginFactory = require('ts-import-plugin')\n  const { getLoader } = require(\"react-app-rewired\");\n+ const rewireLess = require('react-app-rewire-less');\n\n  module.exports = function override(config) {\n    const tsLoader = getLoader(\n      config.module.rules,\n      rule =>\n        rule.loader &&\n        typeof rule.loader === 'string' &&\n        rule.loader.includes('ts-loader')\n    );\n\n    tsLoader.options = {\n      getCustomTransformers: () => ({\n        before: [ tsImportPluginFactory({\n          libraryName: 'antd',\n          libraryDirectory: 'es',\n-         style: 'css',\n+         style: true,\n        }) ]\n      })\n    };\n\n+   config = rewireLess.withLoaderOptions({\n+     modifyVars: { \"@primary-color\": \"#1DA57A\" },\n+   })(config, env);\n\n    return config;\n  }"]],["p","We use ",["code","modifyVars"]," option of ",["a",{title:null,href:"https://github.com/webpack/less-loader#less-options"},"less-loader"]," here, you can see a green button rendered on the page after rebooting the start server."],["h2","Alternative way"],["p","You can also follow instructions in ",["a",{title:null,href:"/docs/react/use-with-create-react-app.en-US.md"},"Use in create-react-app"],", then use ",["span","react-app-rewire-typescript"]," to setup the TypeScript development environment by yourself."],["p","And you can use ",["a",{title:null,href:"https://www.npmjs.com/package/react-scripts-ts-antd"},"react-scripts-ts-antd"]," which includes ts-import-plugin, react-app-rewired, scss, less and etc.You can create a new project that without any configurations by running just one command."],["pre",{lang:"\bbash",highlighted:'$ create<span class="token operator">-</span>react<span class="token operator">-</span>app my<span class="token operator">-</span>project <span class="token operator">-</span><span class="token operator">-</span>scripts<span class="token operator">-</span>version<span class="token operator">=</span>react<span class="token operator">-</span>scripts<span class="token operator">-</span>ts<span class="token operator">-</span>antd'},["code","$ create-react-app my-project --scripts-version=react-scripts-ts-antd"]],["h2","FAQ"],["h3","error TS2605: JSX element type Xxx is not a constructor function for JSX elements."],["p","Before antd 3, You need setting ",["code","allowSyntheticDefaultImports"]," to ",["code","true"]," in tsconfig.json."]],meta:{order:5,title:"Use in TypeScript",filename:"docs/react/use-in-typescript.en-US.md"},description:["section",["p","Let's create a TypeScript project by using ",["code","create-react-app"],", then import ",["code","antd"]," step by step."]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Install-and-Initialization",title:"Install and Initialization"},"Install and Initialization"]],["li",["a",{className:"bisheng-toc-h2",href:"#Import-antd",title:"Import antd"},"Import antd"]],["li",["a",{className:"bisheng-toc-h2",href:"#Advanced-Guides",title:"Advanced Guides"},"Advanced Guides"]],["li",["a",{className:"bisheng-toc-h2",href:"#Alternative-way",title:"Alternative way"},"Alternative way"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]]}}});