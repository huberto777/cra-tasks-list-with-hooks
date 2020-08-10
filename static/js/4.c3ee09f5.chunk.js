(this["webpackJsonpcra-tasks"]=this["webpackJsonpcra-tasks"]||[]).push([[4],{268:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(243),l=a(265),o=a(250),i=function(e){var t={};return e.name?e.name.length<3&&(t.name="Must have min 3 characters"):t.name="Required",t},s=function(e){var t=e.addTask,a=(new Date).toISOString().slice(0,10),n=Object(o.a)({initialValues:{name:"",priority:"",date:a,done:!1,finishDate:null},validate:i,onSubmit:function(e,a){var n=a.resetForm;t(e),n()}});return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:n.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{id:"name",name:"name",type:"text",onChange:n.handleChange,onBlur:n.handleBlur,value:n.values.name,className:"form-control",placeholder:"add task"}),n.errors.name?r.a.createElement("div",{className:"alert alert-danger"},n.errors.name):null),r.a.createElement("div",{className:"form-group form-check"},r.a.createElement("input",{id:"priority",name:"priority",type:"checkbox",onChange:n.handleChange,onBlur:n.handleBlur,value:n.values.priority,className:"form-check-input"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"priority"},"priorytet")),r.a.createElement("button",{className:"btn btn-block btn-outline-warning",type:"submit"},"Dodaj")))},u=a(259),m=a(264);var d=function(e){var t=e.index,a=e.task,n=e.onDone,c=e.onEdit,l=e.onDelete,o=a.name,i=a.done,s=a.finishDate,d=a.priority,b=a.date,f=i,h={};return i&&(h.textDecoration="line-through",h.backgroundColor="orange"),d&&(h.color="red"),r.a.createElement("tr",{style:h},r.a.createElement("td",null,t+1),r.a.createElement("td",{onClick:n},o),r.a.createElement("td",null,i?s:b),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-sm btn-outline-secondary mr-1",onClick:c,disabled:f},r.a.createElement(u.a,{icon:m.a})),r.a.createElement("button",{className:"btn btn-sm btn-outline-danger",onClick:l},r.a.createElement(u.a,{icon:m.b}))))};var b=function(e){var t=e.tasks,a=e.del,n=e.done,c=e.edit;return r.a.createElement("table",{className:"table table-info table-hover table-striped table-responsive{-sm|-md|-lg|-xl}"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"task name"),r.a.createElement("th",null,"date"),r.a.createElement("th",null,"edit / del"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement(d,{key:e.id,index:t,task:e,onDelete:function(){return a(e)},onDone:function(){return n(e)},onEdit:function(){return c(e)}})}))))},f=function(e){var t={};return e.name?e.name.length<3&&(t.name="Must have min 3 characters"):t.name="Required",t},h=function(e){var t=e.update,a=e.edit,n=e.task,l=n.name,i=Object(o.a)({initialValues:{name:l},validate:f,onSubmit:function(e){var a=e.name;t(Object(c.a)(Object(c.a)({},n),{},{name:a}))}});return r.a.createElement("div",{className:"jumbotron bg-dark text-white"},r.a.createElement("form",{onSubmit:i.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{id:"name",name:"name",type:"text",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.name,className:"form-control"}),i.errors.name?r.a.createElement("div",{className:"alert alert-danger"},i.errors.name):null),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-block btn-outline-warning",type:"submit"},"Edytuj")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-block btn-outline-danger",onClick:a},"cancel"))))},p=a(54),E=a.n(p),k=a(114),v=a(269),j=a(115),O=[{id:1,date:"2020-02-03",done:!1,finishDate:null,name:"nauczy\u0107 si\u0119 js es 6",priority:!1},{id:2,date:"2020-02-04",done:!1,finishDate:null,name:"nauczy\u0107 si\u0119 biblioteki axios",priority:!0},{id:3,date:"2020-03-03",done:!1,finishDate:null,name:"zainstalowa\u0107 linuxa",priority:!1},{id:4,date:"2020-04-09",done:!1,finishDate:null,name:"zrobi\u0107 api w laravelu",priority:!1}];function g(e){var t=O.findIndex((function(t){return t.id===e}));if(t<0)throw new Error("task o podanym id nie istnieje");return t}var T={getAllTasks:function(){return Object(k.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)(200);case 2:return e.abrupt("return",[].concat(O));case 3:case"end":return e.stop()}}),e)})))()},addTask:function(e){return Object(k.a)(E.a.mark((function t(){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.a)(200);case 2:return a=Object(c.a)({id:Object(v.a)()},e),O.push(a),t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))()},replaceTask:function(e){return Object(k.a)(E.a.mark((function t(){var a,n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.a)(200);case 2:if(e.id){t.next=4;break}throw new Error("task has to have an id to be updated");case 4:return a=g(e.id),n=Object(c.a)({},e),O[a]=n,t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})))()},finishTask:function(e){return Object(k.a)(E.a.mark((function t(){var a,n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.a)(200);case 2:if(e.id){t.next=4;break}throw new Error("task has to have an id to be finished");case 4:return a=Object(c.a)(Object(c.a)({},e),{},{done:!e.done,finishDate:e.done?(new Date).toISOString().slice(0,10):null}),n=g(e.id),O[n]=a,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})))()},removeTask:function(e){return Object(k.a)(E.a.mark((function t(){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.a)(200);case 2:if(e.id){t.next=4;break}throw new Error("task has to have an id to be deleted");case 4:a=g(e.id),O.splice(a,1);case 6:case"end":return t.stop()}}),t)})))()},getTasksByFullTextSearch:function(e){return Object(k.a)(E.a.mark((function t(){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.a)(200);case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})))()}},y=a(266),S={tasks:[],searchQuery:"",edit:!1,loading:!0,error:null},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SET_TASKS":var a=t.tasks;return Object(c.a)(Object(c.a)({},e),{},{tasks:a});case"SEARCH_TASK":var n=e.tasks.filter((function(t){return t.name.toLowerCase().includes(e.searchQuery)}));return Object(c.a)(Object(c.a)({},e),{},{tasks:n});case"ADD_TASK":var r=t.task,l=[].concat(Object(y.a)(e.tasks),[r]);return Object(c.a)(Object(c.a)({},e),{},{tasks:l});case"REPLACE_TASK":var o=t.replacedTask,i=e.tasks.map((function(e){return e.id===o.id?o:e}));return Object(c.a)(Object(c.a)({},e),{},{tasks:i,edit:!1});case"DELETE_TASK":var s=t.removedTask,u=e.tasks.filter((function(e){return e.id!==s.id}));return Object(c.a)(Object(c.a)({},e),{},{tasks:u});case"TASK_EDIT_START":var m={action:t};return Object(c.a)(Object(c.a)({},e),{},{task:m,edit:!e.edit});case"COMPLETE_TASK":var d=t.completedTask,b=e.tasks.map((function(e){return e.id===d.id&&(e.done=!e.done,e.finishDate=e.done?(new Date).toISOString().slice(0,10):null),e}));return Object(c.a)(Object(c.a)({},e),{},{tasks:b});case"SET_ERROR":var f=t.error;return Object(c.a)(Object(c.a)({},e),{},{error:f});case"LOADING":return Object(c.a)(Object(c.a)({},e),{},{loading:!1});case"SEARCH_INPUT":var h=t.payload;return Object(c.a)(Object(c.a)({},e),{},{searchQuery:h});default:return e}};var x=function(e){var t=e.search;return r.a.createElement("div",{className:"form-group mt-4"},r.a.createElement("input",{type:"text",placeholder:"search task",className:"form-control",onInput:t}))};var N=function(){var e=Object(n.useReducer)(w,void 0,w),t=Object(l.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){T.getAllTasks().then((function(e){return o(function(e){return{type:"SET_TASKS",tasks:e}}(e))})).catch((function(e){return o(function(e){return{type:"SET_ERROR",error:e}}(e))})).finally((function(){return o({type:"LOADING"})})),T.getTasksByFullTextSearch(a.searchQuery).then((function(){o({type:"SEARCH_TASK"})}))}),[a.searchQuery]);var i=function(e){o({type:"TASK_EDIT_START",task:e})},u=a.tasks,m=a.edit,d=a.error,f=a.loading;return r.a.createElement(r.a.Fragment,null,m?r.a.createElement(h,{task:a.task.action.task,update:function(e){var t=Object(c.a)(Object(c.a)({},a.task),e);T.replaceTask(t).then((function(e){return o(function(e){return{type:"REPLACE_TASK",replacedTask:e}}(e))}))},edit:i}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jumbotron bg-dark text-white col-{-sm|-md|-lg|-xl}"},r.a.createElement(x,{search:function(e){return o(function(e){return{type:"SEARCH_INPUT",payload:e.target.value.toLowerCase()}}(e))}}),r.a.createElement(s,{addTask:function(e){try{T.addTask(e).then((function(e){return o(function(e){return{type:"ADD_TASK",task:e}}(e))}))}catch(d){console.log("Jest b\u0142\u0105d przy tworzeniu taska:",d)}}})),d?"Nie uda\u0142o si\u0119 za\u0142adowa\u0107 :(":null,f?"taski si\u0119 \u0142aduj\u0105...":null,r.a.createElement(b,{loading:f,tasks:u,del:function(e){T.removeTask(e).then((function(){return o({type:"DELETE_TASK",removedTask:e})}))},done:function(e){T.finishTask(e).then((function(){return o({type:"COMPLETE_TASK",completedTask:e})}))},edit:i})))};var A=function(e){var t=e.children;if(t.length<1)throw new Error("Header has to have at least one child!");return r.a.createElement("header",{className:"card bg-warning text-white"},t)},D=a(56),C=a.n(D),_=a(113);var R=function(e){var t,a=e.onLogout,c=Object(n.useContext)(_.a).accessToken;return r.a.createElement(r.a.Fragment,null,c?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title text-center"},"TASKS LIST"),r.a.createElement("p",{className:"card-text text-right"},"Witaj ",(t=c,C.a.decode(t).email)," /",r.a.createElement("a",{href:"#",className:"",onClick:a},"wyloguj si\u0119")))):null)};t.default=function(e){var t=e.onLogout;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null,r.a.createElement(R,{onLogout:t})),r.a.createElement(N,null))}}}]);
//# sourceMappingURL=4.c3ee09f5.chunk.js.map