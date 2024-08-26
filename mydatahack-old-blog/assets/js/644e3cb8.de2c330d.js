"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[6696],{15249:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(74848),n=r(28453);const i={sidebar_position:20},l="Could not create controller Error for Controller Renderings \u2013 Sitecore 8.2",s={id:"Web/Sitecore/controller-error",title:"Could not create controller Error for Controller Renderings \u2013 Sitecore 8.2",description:"ASP.NET standard controller action routing is /{action} (see here). When you create a new project, you will see this in RouteConfig.cs file in the App_Start folder.",source:"@site/docs/Web/Sitecore/20-controller-error.md",sourceDirName:"Web/Sitecore",slug:"/Web/Sitecore/controller-error",permalink:"/mydatahack-old-blog/docs/Web/Sitecore/controller-error",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"How to resolve Could not load file or assembly System.Web.Mvc Error \u2013 Sitecore 8.2",permalink:"/mydatahack-old-blog/docs/Web/Sitecore/load-file-error"},next:{title:"Frontend",permalink:"/mydatahack-old-blog/docs/category/frontend"}},a={},c=[];function d(e){const o={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"could-not-create-controller-error-for-controller-renderings--sitecore-82",children:"Could not create controller Error for Controller Renderings \u2013 Sitecore 8.2"}),"\n",(0,t.jsxs)(o.p,{children:["ASP.NET standard controller action routing is ",(0,t.jsx)(o.code,{children:"{controller}/{action}"})," (see here). When you create a new project, you will see this in RouteConfig.cs file in the App_Start folder."]}),"\n",(0,t.jsx)(o.p,{children:"Sitecore has overridden this standard route registration procedures. Routing to controller and action can be determined by the controller rendering component. This makes sense as Sitecore page typically has multiple controller renderings. When you create a visual studio solution, it is best to delete App_Start folder along with RouteConfig.cs so that you don\u2019t override the Sitecore\u2019s route registration."}),"\n",(0,t.jsx)(o.p,{children:"As a side note, it also best to delete Global.asax file so that you do not override the one comes with Sitecore installation."}),"\n",(0,t.jsx)(o.p,{children:"The way sitecore finds the way to controller/action is defined in the rendering. Once you create a rendering, you can add the controller and controller action in the data section as below."}),"\n",(0,t.jsx)(o.p,{children:"Controller can be just the name of the controller like Media. But, if you have the visual studio project set up as Helix, you want to have:"}),"\n",(0,t.jsx)(o.p,{children:"ProjectName.Controllers.ControllerClassName, AssemblyName"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"img",src:r(93115).A+"",width:"530",height:"230"})}),"\n",(0,t.jsx)(o.p,{children:"Now, enough background. Let\u2019s talk about the error."}),"\n",(0,t.jsx)(o.p,{children:"If the Sitecore cannot find the path for controller and action, you will get the error below. There are three possible reasons and fixes."}),"\n",(0,t.jsx)(o.p,{children:"Error"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"Error Rendering Controller: SitecoreDev.Feature.Media.MediaController, SitecoreDev.Feature.Media.\nAction: HeroSlider: Could not create controller: 'SitecoreDev.Feature.Media.MediaController, SitecoreDev.Feature.Media'.\nThe item being rendered is: '/sitecore/content/Home/MyPage'. The context item is: '/sitecore/content/Home/MyPage'.\nThe current route url is: '{*pathInfo}'.\nThis is the default Sitecore route which is set up in the 'InitializeRoutes' processor of the 'initialize' pipeline.\n\n   at Sitecore.Mvc.Controllers.SitecoreControllerFactory.CreateController(RequestContext requestContext, String controllerName)\n   at Sitecore.Mvc.Controllers.ControllerRunner.GetController()\n   at Sitecore.Mvc.Controllers.ControllerRunner.Execute()\n   at Sitecore.Mvc.Presentation.ControllerRenderer.Render(TextWriter writer)\n   at Sitecore.Mvc.Pipelines.Response.RenderRendering.ExecuteRenderer.Render(Renderer renderer, TextWriter writer, RenderRenderingArgs args)\n\nInner Exception: The controller for path '/' was not found or does not implement IController.\n   at System.Web.Mvc.DefaultControllerFactory.GetControllerInstance(RequestContext requestContext, Type controllerType)\n   at System.Web.Mvc.DefaultControllerFactory.CreateController(RequestContext requestContext, String controllerName)\n   at Sitecore.Mvc.Controllers.SitecoreControllerFactory.CreateController(RequestContext requestContext, String controllerName)\n"})}),"\n",(0,t.jsx)(o.p,{children:"Solution 1"}),"\n",(0,t.jsx)(o.p,{children:"You might have overridden Sitecore\u2019s route registration procedures by publishing the project with default RouteConfig.cs for a standard ASP.NET project. Delete the file and republish the project. Alternatively, delete the dll of the project from the web root bin folder and republish the project after deleting RouteConfig.cs."}),"\n",(0,t.jsx)(o.p,{children:"Solution 2"}),"\n",(0,t.jsx)(o.p,{children:"Your configuration for Controller is not correct. Follow the convention above."}),"\n",(0,t.jsx)(o.p,{children:"Solution 3"}),"\n",(0,t.jsx)(o.p,{children:"Your controller class is inheriting Controller as the base class. Instead import Sitecore.Mvc.Controllers and use SitecoreController."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-csharp",children:"using Sitecore.Mvc.Controllers;\n\npublic class MediaController : SitecoreController\n"})}),"\n",(0,t.jsx)(o.p,{children:"See how you go!"}),"\n",(0,t.jsx)(o.p,{children:"(2019-03-23)"})]})}function h(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},93115:(e,o,r)=>{r.d(o,{A:()=>t});const t="data:image/webp;base64,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"},28453:(e,o,r)=>{r.d(o,{R:()=>l,x:()=>s});var t=r(96540);const n={},i=t.createContext(n);function l(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);