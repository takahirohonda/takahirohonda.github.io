"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[8630],{65052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=n(74848),i=n(28453);const a={sidebar_position:8},s="Creating Web APIs using ASP.NET and MySQL in 5 minutes",r={id:"Web/DotNet/create-web-api",title:"Creating Web APIs using ASP.NET and MySQL in 5 minutes",description:"Creating a web API that interact with a database with C# is quite easy thanks to ASP.NET and Entity Framework. Building API with ASP.NET is essentially creating a MVC application without View. If you learn how to create a website with ASP.NET, you can apply the skills directly to API building.",source:"@site/docs/Web/DotNet/8.create-web-api.md",sourceDirName:"Web/DotNet",slug:"/Web/DotNet/create-web-api",permalink:"/docs/Web/DotNet/create-web-api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Unit Testing ASP.NET Web API by Mocking DbContext with NSubstitute",permalink:"/docs/Web/DotNet/dbcontext-mocking-n-substitute"},next:{title:"Sitecore",permalink:"/docs/category/sitecore"}},c={},l=[];function d(e){const t={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"creating-web-apis-using-aspnet-and-mysql-in-5-minutes",children:"Creating Web APIs using ASP.NET and MySQL in 5 minutes"}),"\n",(0,o.jsx)(t.p,{children:"Creating a web API that interact with a database with C# is quite easy thanks to ASP.NET and Entity Framework. Building API with ASP.NET is essentially creating a MVC application without View. If you learn how to create a website with ASP.NET, you can apply the skills directly to API building."}),"\n",(0,o.jsx)(t.p,{children:"Entity Framework is a dotnet version of object-relational mapper (ORM) that gives you a nice abstraction layer to interact with relational databases. With Entity Framework, you do not need to write a single line of SQL. Tables become classes and SQL queries become methods that you can implement purely with C#."}),"\n",(0,o.jsx)(t.p,{children:"With the power of .NET framework and tools, we can create a web API that interact with a database in 10 minutes. While .NET Framework only runs on Windows, .NET Core is a cross-platform framework, which can run in any OS (even in Linux)."}),"\n",(0,o.jsx)(t.p,{children:"Let\u2019s get started."}),"\n",(0,o.jsx)(t.p,{children:"Prerequisite"}),"\n",(0,o.jsx)(t.p,{children:"In this scenario, we are using MySQL as a back-end database. We are going to use sakila database that comes with MySQL community edition installation. Once you install MySQL, you can create a user. We also assume that you have the latest .NET Core and Visual Studio installed."}),"\n",(0,o.jsx)(t.p,{children:"Steps"}),"\n",(0,o.jsx)(t.p,{children:"(1) Create a Web API project"}),"\n",(0,o.jsx)(t.p,{children:"When you create a .NET Core Web Application project in Visual Studio, you can choose different template types. Choose .NET Core Web Application and then choose Web API, it comes with the example API. We will build our API on top of this. Name the project as ApiIn10Minutes. Your time starts now!"}),"\n",(0,o.jsx)(t.p,{children:"(2) Install Dependencies"}),"\n",(0,o.jsx)(t.p,{children:"There are two packages you need to install, MySql.Data.EntityFrameworkCore and Microsoft.EntityFrameworkCore.Tools. Open the Package Manager Console, get into the project directory and run dotnet add package as below. Make sure to restore it after you install them."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"cd ApiIn10Minutes\ndotnet add package MySql.Data.EntityFrameworkCore\ndotnet add package Microsoft.EntityFrameworkCore.Tools\ndotnet restore\n"})}),"\n",(0,o.jsx)(t.p,{children:"(3) Import the model from sakila database"}),"\n",(0,o.jsx)(t.p,{children:"The EntitiyFrameworkCore.Tools package gives you useful command-line tools. With a single line of command, it will create a model and DbContext from a chosen database. Check this out."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'Scaffold-DbContext "Server=localhost;Port=3306;Database=sakila;Uid=myusername;Pwd=mypwd;" MySql.Data.EntityFrameworkCore -OutputDir Models\n'})}),"\n",(0,o.jsx)(t.p,{children:"(4) Remove OnConfiguring Method in sakilaContext.cs"}),"\n",(0,o.jsxs)(t.p,{children:["When you go into the newly created DbContext, sakilaContext.cs, in the Models folder, you will find the warning: To protect potentially sensitive information in your connection string, you should move it out of source code. See ",(0,o.jsx)(t.a,{href:"http://go.microsoft.com/fwlink/?LinkId=723263",children:"http://go.microsoft.com/fwlink/?LinkId=723263"})," for guidance on storing connection strings."]}),"\n",(0,o.jsx)(t.p,{children:"Let\u2019s remove OnConfiguring() from the file and we will make it cleaner in the next few steps."}),"\n",(0,o.jsx)(t.p,{children:"(5) Add the connection string in appsettings.json"}),"\n",(0,o.jsx)(t.p,{children:"Just above Logging, add the connection string as below."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n"ConnectionStrings": {\n"SakilaDatabase": "Server=localhost;Port=3306;Database=sakila;Uid=myusername;Pwd=mypwd;"\n},\n"Logging": {\n"IncludeScopes": false,\n'})}),"\n",(0,o.jsx)(t.p,{children:"(6) Add DbContext to ConfigureServices()"}),"\n",(0,o.jsx)(t.p,{children:"Then, you need to configure the DbContext by adding sakilaDbContext to the service just above services.AddMvc(). This will inject sakilaDbContext into the controller. This is much better than using OnConfiguring method."}),"\n",(0,o.jsx)(t.p,{children:"Any red line you see in the code, just right click and press refactor to add necessary package import statement at the top."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:'public void ConfigureServices(IServiceCollection services)\n{\n  services.AddDbContext<sakilaContext>(options =>\n      options.UseMySQL(Configuration.GetConnectionString("SakilaDatabase")));\n  services.AddMvc();\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"(7) Create a controller"}),"\n",(0,o.jsx)(t.p,{children:"Create a controller called ActorsController.cs in the Controller folder by clicking add controller. It will already has a scaffold."}),"\n",(0,o.jsx)(t.p,{children:"Add the route above the class, create private property _context, add constructor with context as an argument, and convert Actor to array in the return statement with Ok() instead of View()."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:'namespace ApiIn10Minutes.Controllers\n{\n  [Route("api/[controller]")]\n  public class ActorsController : Controller\n  {\n    private sakilaContext _context;\n\n    public ActorsController(sakilaContext context)\n    {\n        _context = context;\n    }\n\n    public IActionResult Index()\n    {\n        return Ok(_context.Actor.ToArray());\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"(8) Run and Test"}),"\n",(0,o.jsx)(t.p,{children:"Run the project. The browser will show you the API from ValuesController. You can change the path to /actors."}),"\n",(0,o.jsx)(t.p,{children:"Check this out!"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"img",src:n(97325).A+"",width:"700",height:"312"})}),"\n",(0,o.jsx)(t.p,{children:"Good times!"}),"\n",(0,o.jsx)(t.p,{children:"Next Step"}),"\n",(0,o.jsx)(t.p,{children:"We can refactor this code and write a unit test on this. If you are interested, check out the post here!"}),"\n",(0,o.jsx)(t.p,{children:"The complete Actor API code and unit test code examples can be found here."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},97325:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/img-1-b33fdf78f43e02e67432902ab1b37462.webp"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var o=n(96540);const i={},a=o.createContext(i);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);