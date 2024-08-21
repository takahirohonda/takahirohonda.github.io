"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[7240],{90412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(74848),s=n(28453);const o={sidebar_position:7},i="How to Mock Rendering Parameters in Unit Test",a={id:"Web/Sitecore/mock-rendering-param",title:"How to Mock Rendering Parameters in Unit Test",description:"Now that we created a cool components with rendering parameters (see Using Rendering Parameters to Inject Data into Hidden Input), we can write a unit test. Sitecore\u2019s Rendering class has a publicly accessible string field called Parameters. This is the rendering parameter string get populated on page rendering. Mocking is relatively straight forward as all you need to do is to add the mock parameters to this field.",source:"@site/docs/Web/Sitecore/7.mock-rendering-param.md",sourceDirName:"Web/Sitecore",slug:"/Web/Sitecore/mock-rendering-param",permalink:"/docs/Web/Sitecore/mock-rendering-param",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"How to Troubleshoot FakeDb Errors \u2013 Sitecore 8.2",permalink:"/docs/Web/Sitecore/troubleshoot-fake-db-error"},next:{title:"Using Rendering Parameters to Inject Data into Hidden Input \u2013 Sitecore",permalink:"/docs/Web/Sitecore/use-rendering-param-inject-data"}},l={},c=[];function u(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"how-to-mock-rendering-parameters-in-unit-test",children:"How to Mock Rendering Parameters in Unit Test"}),"\n",(0,r.jsx)(t.p,{children:"Now that we created a cool components with rendering parameters (see Using Rendering Parameters to Inject Data into Hidden Input), we can write a unit test. Sitecore\u2019s Rendering class has a publicly accessible string field called Parameters. This is the rendering parameter string get populated on page rendering. Mocking is relatively straight forward as all you need to do is to add the mock parameters to this field."}),"\n",(0,r.jsx)(t.p,{children:"Here is the controller created in the previous post. We will write a unit test on this."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"using SitecoreDev.Feature.Design.Repository;\nusing Sitecore.Mvc.Presentation;\nusing Sitecore.Mvc.Controllers;\nusing System.Web.Mvc;\n\nnamespace SitecoreDev.Feature.Design.Controllers\n{\n    public class CustomDataDivController : SitecoreController\n    {\n        private readonly ICustomDataDivRepository customDataDivRrepository;\n        private readonly RenderingParameters parameters;\n\n        public CustomDataDivController() : this(new CustomDataDivRepository()) { }\n\n        public CustomDataDivController(ICustomDataDivRepository repository)\n        {\n            this.customDataDivRrepository = repository;\n            this.parameters = RenderingContext.Current?.Rendering?.Parameters;\n        }\n\n        public ActionResult CustomDataDiv()\n        {\n            var data = this.customDataDivRrepository\n                .GetParamsForCustomDiv(parameters);\n            return View(data);\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"Here are the unit tests, covering scenarios for parameters present and absent. As you can see, the RenderingParameters class is instantiated with a query string with parameters, then added to the Parameters field in the Rendering object."}),"\n",(0,r.jsx)(t.p,{children:"All you need to do is to create rendering context with the RenderingContext.EnterContext method and pass the mock rendering."}),"\n",(0,r.jsx)(t.p,{children:"We are using NSubstitue to mock the repository through its interface. This should be straight forward. We are also using FluentAssertions for assertions."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'using FluentAssertions;\nusing NSubstitute;\nusing Sitecore.Mvc.Presentation;\nusing SitecoreDev.Feature.Design.Controllers;\nusing SitecoreDev.Feature.Design.Models;\nusing SitecoreDev.Feature.Design.Repository;\nusing System;\nusing System.Collections.Generic;\nusing System.Web.Mvc;\nusing Xunit;\n\nnamespace SitecoreDev.Feature.Design.Tests\n{\n    public class CustomDataDivControllerTests\n    {\n        private readonly ICustomDataDivRepository repository;\n\n        public CustomDataDivControllerTests()\n        {\n            this.repository = Substitute.For<ICustomDataDivRepository>();\n        }\n\n        [Fact]\n        public void CustomDataDivController_Should_Return_View_With_Correct_Model()\n        {\n            // Arrange\n            // (1) Set rendering parameter\n            var rendering = new Rendering();\n            // Parameters are publicly accessible field in rendering.\n            // RenderingParameters takes query string as the constructor argument.\n            rendering.Parameters = new RenderingParameters("hey=hello&more=moreValues");\n            // (2) Create expected model\n            var expectedModel = new CustomDataDiv()\n            {\n                CustomData = new Dictionary<string, string>\n                {\n                    { "hey", "hello" },\n                    { "more", "moreValues" }\n                }\n            };\n            // (3) Stub the repository function\n            repository.GetParamsForCustomDiv(rendering.Parameters).Returns(expectedModel);\n\n            // (4) Create rendering context with the mocked rendering\n            using (RenderingContext.EnterContext(rendering))\n            {\n                var controller = new CustomDataDivController(this.repository);\n\n                // Act\n                ViewResult result = controller.CustomDataDiv() as ViewResult;\n                var actualViewName = result.ViewName;\n                var actualModel = result.ViewData.Model as CustomDataDiv;\n\n                // Assert\n                Assert.NotNull(result);\n                result.ViewName.Should().Be(String.Empty);\n                actualModel.Should().BeEquivalentTo(expectedModel);\n            }\n        }\n\n        [Fact]\n        public void CustomDataDivController_Should_Return_No_Model_Without_Parameters()\n        {\n            // Arrange\n            using (RenderingContext.EnterContext(new Rendering()))\n            {\n                var controller = new CustomDataDivController(this.repository);\n\n                // Act\n                ViewResult result = controller.CustomDataDiv() as ViewResult;\n                var actualModel = result.ViewData;\n\n                // Assert\n                Assert.NotNull(result);\n                actualModel.Should().HaveCount(0);\n            }\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Here is the repository created in the previous post."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"using Sitecore.Mvc.Presentation;\nusing SitecoreDev.Feature.Design.Models;\nusing System.Collections.Generic;\n\nnamespace SitecoreDev.Feature.Design.Repository\n{\n    public class CustomDataDivRepository : ICustomDataDivRepository\n    {\n        private readonly CustomDataDiv model;\n\n        public CustomDataDivRepository()\n        {\n            this.model = new CustomDataDiv();\n        }\n\n        public CustomDataDiv GetParamsForCustomDiv(RenderingParameters parameters)\n        {\n            this.model.CustomData = new Dictionary<string, string>();\n            foreach (var param in parameters)\n            {\n                model.CustomData.Add(param.Key, param.Value);\n            }\n            return model;\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"Unit testing it is super easy. Just create the RenderingParameters object as in the controller test. Then, compare the results."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'using FluentAssertions;\nusing Sitecore.Mvc.Presentation;\nusing SitecoreDev.Feature.Design.Models;\nusing SitecoreDev.Feature.Design.Repository;\nusing System.Collections.Generic;\nusing Xunit;\n\nnamespace SitecoreDev.Feature.Design.Tests.RepositoryTests\n{\n    public class CustomDataDivRepositoryTests\n    {\n        [Fact]\n        public void GetParamsForCustomDiv_Should_Return_Correct_Model()\n        {\n            // Arrange\n            // Create mock parameters\n            var parameters = new RenderingParameters("hey=hello&more=moreValues");\n            // Create expected model\n            var expectedModel = new CustomDataDiv()\n            {\n                CustomData = new Dictionary<string, string>\n                {\n                    { "hey", "hello" },\n                    { "more", "moreValues" }\n                }\n            };\n            // Instantiate the class\n            var repository = new CustomDataDivRepository();\n\n           // Act\n           var model = repository.GetParamsForCustomDiv(parameters);\n\n           // Assert\n           model.Should().BeEquivalentTo(expectedModel);\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"(2019-08-17)"})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);