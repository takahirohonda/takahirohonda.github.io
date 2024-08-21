"use strict";(self.webpackChunkmydatahack_blog_site=self.webpackChunkmydatahack_blog_site||[]).push([[2370],{56170:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>g});var n=i(74848),r=i(28453);const a={sidebar_position:29},o="Resizing Image for Frontend with Python",s={id:"Web/Frontend/resize-image-with-python",title:"Resizing Image for Frontend with Python",description:"We can optimise the load time by using different image sizes for different screen widths. There is no point in loading a huge image for a mobile when the width is only for 200px. Here is the quick Python script to resize images. By changing the array, you can output as many dimensions as you want.",source:"@site/docs/Web/Frontend/29.resize-image-with-python.md",sourceDirName:"Web/Frontend",slug:"/Web/Frontend/resize-image-with-python",permalink:"/mydatahack-old-blog/docs/Web/Frontend/resize-image-with-python",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:29,frontMatter:{sidebar_position:29},sidebar:"tutorialSidebar",previous:{title:"How to Bundle Audio File into JS App",permalink:"/mydatahack-old-blog/docs/Web/Frontend/audio-file-js-app"},next:{title:"What is \u2018this\u2019 referencing to in JavaScript?",permalink:"/mydatahack-old-blog/docs/Web/Frontend/this-ref-js"}},h={},g=[];function l(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"resizing-image-for-frontend-with-python",children:"Resizing Image for Frontend with Python"}),"\n",(0,n.jsx)(t.p,{children:"We can optimise the load time by using different image sizes for different screen widths. There is no point in loading a huge image for a mobile when the width is only for 200px. Here is the quick Python script to resize images. By changing the array, you can output as many dimensions as you want."}),"\n",(0,n.jsx)(t.p,{children:"It will work for both square and rectangle images. For rectangle images, it will keep the width: height ratio. We can pass multiple image files with multiple target widths."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from PIL import Image\nfrom resizeimage import resizeimage\n\n# For square images\ninput_path_square_image = [\n  './original/schedule-girl-1.PNG',\n  './original/schedule-girl-2.PNG',\n  './original/schedule-girl-3.PNG',\n  './original/schedule-girl-4.PNG'\n]\ntarget_width_list_square = [150, 200, 300, 400, 600]\n\n# For rect images\ninput_path_rect_image = ['./original/hangout-girls.PNG']\ntarget_width_list_rect = [150, 200, 300, 400, 600]\n\ndef resize_image_by_width(original_img_path, width, reformatted_img_path):\n  '''\n  function to resize image by width. height will be resized in proportion to the original.\n  Example call:\n  resize_image_by_width('./original/schedule-girl-1.PNG', 200, './formatted/schedule-girl-1-200px.PNG')\n  '''\n  img = Image.open(original_img_path)\n  img = resizeimage.resize_width(img, width)\n  img.save(reformatted_img_path, img.format)\n  print('Image formatted as {}'.format(reformatted_img_path))\n  img.close()\n\ndef create_output_path(original_img_path, width, output_target_folder = '../img/front-page-img'):\n  '''\n  function to create complete output file path based on the target folder\n  '''\n  img_file = original_img_path.split('/')[-1].split('.')\n  image_file_name = img_file[0] + '-width-' + str(width) + 'px.'+ (img_file[1]).lower()\n  output_path = output_target_folder + '/' + image_file_name\n  print(output_path)\n  return output_path\n\ndef resize_all(input_img_list, target_width_list):\n  for width in target_width_list:\n    for img in input_img_list:\n      output_path = create_output_path(img, width)\n      resize_image_by_width(img, width, output_path)\n\ndef main():\n  resize_all(input_path_square_image, target_width_list_square)\n  resize_all(input_path_rect_image, target_width_list_rect)\n\n# Execute\nmain()\n"})}),"\n",(0,n.jsx)(t.p,{children:"(2020-05-03)"})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>s});var n=i(96540);const r={},a=n.createContext(r);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);