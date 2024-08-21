"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[6580],{62272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(74848),r=n(28453);const s={sidebar_position:11},i="Using Data Source in Controller Renderings",a={id:"Web/Sitecore/use-data-source-in-controlled-renerings",title:"Using Data Source in Controller Renderings",description:"Data source for Sitecore component provide data points to be used in the components, such as controller renderings or view renderings. Content author can easily edit those data points (e.g. header title, body text or CSS style) to customise components. It is one of the techniques to make Sitecore component customisable. Data source can be assigned to a component.",source:"@site/docs/Web/Sitecore/11.use-data-source-in-controlled-renerings.md",sourceDirName:"Web/Sitecore",slug:"/Web/Sitecore/use-data-source-in-controlled-renerings",permalink:"/mydatahack-old-blog/docs/Web/Sitecore/use-data-source-in-controlled-renerings",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"custom-goals",permalink:"/mydatahack-old-blog/docs/Web/Sitecore/custom-goals"},next:{title:"style-folder-template",permalink:"/mydatahack-old-blog/docs/Web/Sitecore/style-folder-template"}},c={},l=[];function d(e){const t={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"using-data-source-in-controller-renderings",children:"Using Data Source in Controller Renderings"}),"\n",(0,o.jsx)(t.p,{children:"Data source for Sitecore component provide data points to be used in the components, such as controller renderings or view renderings. Content author can easily edit those data points (e.g. header title, body text or CSS style) to customise components. It is one of the techniques to make Sitecore component customisable. Data source can be assigned to a component."}),"\n",(0,o.jsx)(t.p,{children:"Another advantage of using data source is that it makes it easier to create AB test or personalised content. Out of the box, Sitecore provides the ability for a component to reference different data source items and swap according to the rules."}),"\n",(0,o.jsx)(t.p,{children:"In fact, we will create an AB test based on this component in the next post \u2013 How to Set up Content Tests with Data Source"}),"\n",(0,o.jsx)(t.p,{children:"To use data source, the component should reference to a template with or without default values. Actual data points are stored as items. Therefore, the component needs to know the location (folder) of the items."}),"\n",(0,o.jsx)(t.p,{children:"In this post, we are going to create a controller rendering to render form with data source items. The template for the data source has two fields, Title as single-line text and Script as multi-line text. A form gets injected by writing JavaScript in the multi-line text field."}),"\n",(0,o.jsx)(t.p,{children:"First, we need to create a template for the data source. Then, create a controller rendering that reference data source location and data template."}),"\n",(0,o.jsx)(t.p,{children:"Once the page is created, it will have a folder template with data source."}),"\n",(0,o.jsx)(t.p,{children:"Below is the summary diagram of how everything puts together."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img",src:n(59343).A+"",width:"1780",height:"1326"})}),"\n",(0,o.jsx)(t.p,{children:"In experience editor, we can add form component to the placeholder, col-wide-1. Make sure that the placeholder includes FrontEndTest as an available control."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img",src:n(46).A+"",width:"739",height:"597"})}),"\n",(0,o.jsx)(t.p,{children:"As the component has data source, you can select an associated content once you insert the component. To insert associated content, you can click database plus icon on the component."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img",src:n(39145).A+"",width:"465",height:"391"})}),"\n",(0,o.jsx)(t.p,{children:"Form will be rendered."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img",src:n(87824).A+"",width:"461",height:"563"})}),"\n",(0,o.jsx)(t.p,{children:"Let\u2019s check out the code."}),"\n",(0,o.jsx)(t.p,{children:"FrontEndTest.cshtml"}),"\n",(0,o.jsx)(t.p,{children:"This is the razor view."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:'@model SitecoreDev.Feature.Design.Models.FrontEndTest\n\n@if (Model != null)\n{\n    <h2>@Model.Title</h2>\n    <div class="js-injected"></div>\n    <script>@Html.Raw(Model.Script)<\/script>\n}\nFrontEndTest.cs\n\nWe need a model to pass data to the view.\n\npublic class FrontEndTest\n{\n    public string Title { get; set; }\n    public string Script { get; set; }\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"FrontEndTestRepository.cs"}),"\n",(0,o.jsx)(t.p,{children:"Controller gets the data source ID from the current rendering context. Repository access database to retrieve the value based on a data source id."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:'namespace SitecoreDev.Feature.Design.Repository\n{\n    public class FrontEndTestRepository : IFrontEndTestRepository\n    {\n        private readonly Database _database;\n        private readonly FrontEndTest _frontEndTestModel;\n\n        public FrontEndTestRepository()\n        {\n            _database = Context.Database;\n            _frontEndTestModel = new FrontEndTest();\n        }\n\n        public FrontEndTest GetFrontEndTestModel(string dataSourceId)\n        {\n            try\n            {\n                var item = _database.GetItem(new Sitecore.Data.ID(dataSourceId));\n                _frontEndTestModel.Title = item["Title"];\n                _frontEndTestModel.Script = item["Script"];\n            }\n            catch (Exception ex)\n            {\n                Sitecore.Diagnostics.Log.Error("Error in GetFrontEndModel()", ex, this);\n            }\n\n            return _frontEndTestModel;\n        }\n    }\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"FrontEndTestController.cs"}),"\n",(0,o.jsx)(t.p,{children:"This should be fairly straight-forward. RenderingContext.Current.Rendering.DataSource will return the data source Id in string. It will be cast as ID object in the repository to call GetItem()."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:'using System.Web.Mvc;\nusing Sitecore.Mvc.Presentation;\nusing Sitecore.Mvc.Controllers;\nusing SitecoreDev.Feature.Design.Repository;\nusing SitecoreDev.Feature.Design.Models;\n\nnamespace SitecoreDev.Feature.Design.Controllers\n{\n    public class FrontEndTestController : Controller\n    {\n        private IFrontEndTestRepository frontEndTestRepository;\n\n        public FrontEndTestController (): this(new FrontEndTestRepository())\n        {\n        }\n        public FrontEndTestController(IFrontEndTestRepository frontEndTestRepository)\n        {\n            this.frontEndTestRepository = frontEndTestRepository;\n        }\n        public ViewResult GetFrontEndTestView()\n        {\n            var dataSourceId = RenderingContext.Current?.Rendering?.DataSource;\n            var viewModel =\n                dataSourceId != null\n                ? frontEndTestRepository.GetFrontEndTestModel(dataSourceId)\n                : new FrontEndTest();\n\n            return View("FrontEndTest", viewModel);\n        }\n    }\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Scripts.js"}),"\n",(0,o.jsx)(t.p,{children:"Finally, this is the script in the multinet text field which injects form into the page."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'document.addEventListener("DOMContentLoaded", () => {\n  var targetElem = $(document).find(".js-injected");\n  var form = $(`<form>\n      <div class="form-group">\n        <label for="firstname">First name</label>\n        <input type="text" class="form-control" id="firstname" \n                name="firstname" placeholder="Enter firstname">\n      </div>\n      <div class="form-group">\n        <label for="lastname">Last name</label>\n        <input type="text" class="form-control" id="lastname" \n                name="lastname" placeholder="Enter lastname">\n      </div>\n      <div class="form-group">\n        <label for="email">Email</label>\n        <input type="email" class="form-control" id="email" \n                name="email" placeholder="Enter email">\n      </div>\n      <div class="form-check">\n        <input type="checkbox" name="subscribe" class="form-check-input" id="subscribe">\n        <label class="form-check-label" for="subscribe">Subscribe</label>\n      </div>\n      <button type="submit" class="btn btn-danger">Submit</button>\n    </form>`);\n  form.insertAfter(targetElem);\n});\n'})}),"\n",(0,o.jsx)(t.p,{children:"Next steps\nLet\u2019s use this component to create an AB test. Creating a content test in Sitecore is easy when the component is set up correctly. Check this out: How to Set up Content Tests with Data Source.\nBefore creating the test, we should create the custom goal can be triggered by AJAX call \u2013 check out this post for custom goal creation: : How to Set up Content Tests with Data Source."}),"\n",(0,o.jsx)(t.p,{children:"(2019-8-14)"})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},59343:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/img-1-cf435f26b8f08c8902a44eb853068e55.webp"},46:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/img-2-20f23e35a76b522ff727e80443e71a61.webp"},39145:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/img-3-718b40268182c1bf8f7cfbb2238880d2.webp"},87824:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/img-4-cc0ba7136415251b04df60dbfd713ec7.webp"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);