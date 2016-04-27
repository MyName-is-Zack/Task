$(document).ready(function() { 
	var codeID = "";
	var username = "";
	var dateRange = "";
	var start ="04/21/2016";
	var end ="04/21/2016";
	var accountSelect = "";
	
  $('#dateRange').daterangepicker({
	    "startDate": start,
	    "endDate": end
	}, function(start, end, label) {
		  //console.log(start.format('MM/DD/YYYY') );
		  //console.log( end.format('MM/DD/YYYY'));
		  start = start.format('MM/DD/YYYY');
		  end = end.format('MM/DD/YYYY');
	}); 
  $('#accountSelect').select2({
	  placeholder: "所有用户",
  });
   $('#accountType').select2({
	  placeholder: "系统用户",
  });
  $('#example').DataTable({
	  //"lengthChange": false,
	  "searching":false,
	  "columnDefs": [{  
            // 定义操作列  
            "targets": 8,  
            "data": null,  
            "render": function(data, type, row) { 			
                var cz = '<div class="btn-group"><button class="btn">操作</button> <button data-toggle="dropdown" class="btn dropdown-toggle"><span class="caret"></span></button><ul class="dropdown-menu">'   
                cz += '<li><a href="#" onclick="del(\''+data[1]+'\')">删除</a></li>' 
				cz += '<li><a href="#" onclick="change(\''+data[1]+'\')">修改</a></li>' 
				cz += '<li><a href="#">封存</a></li>' 
				cz += '<li><a href="#">启封</a></li>' 
				cz += '</ul></div>';
                return cz;  
            }  
        }], 
	  "oLanguage" : {
          "sLengthMenu": "每页显示 _MENU_ 条记录",
          "sZeroRecords": "抱歉， 没有找到",
          "sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
          "sInfoEmpty": "没有数据",
          "sInfoFiltered": "(从 _MAX_ 条数据中检索)",
          "sZeroRecords": "没有检索到数据",
           "sSearch": "名称:",
          "oPaginate": {
          "sFirst": "首页",
          "sPrevious": "前一页",
          "sNext": "后一页",
          "sLast": "尾页"
          }
      
	  },
  "ajax": "json/tableData.json"
  });
  
  $("#seachBtn").click(function(){
	  getVal();
	  useAjax("json/tableData.json");
  });
  
   $("#seachGroup").click(function(){
	  $(".seachDiv").show();
	  $(".addDiv").hide();
  });
   $("#addGroup").click(function(){
	  $(".seachDiv").hide();
	  $(".addDiv").show();
  });
  function getVal(){
	codeID = $("#codeID").val();
	username = $("#username").val();
	accountSelect = $("#accountSelect").val();
  }
  function useAjax(url){
	  console.log("codeID:"+codeID);
	  console.log("username:"+username);
	  console.log("start:"+start);
	  console.log("end:"+end);
	  console.log("accountSelect:"+accountSelect);
	  $.ajax({
		    type: 'POST',
		    url: url ,
		    data: {
		    	codeID:codeID,
		    	username:username,
		    	start:start,
		    	end:end,
		    	accountSelect:accountSelect
		    },
		    dataType: "json",
		    success:function(data) {  
    		      },  
			error : function() {  
			   alert("异常！");  
			}  
		}); 
  }
  
}); 
function change(temp){
	console.log("编码ID："+temp)
	alert("编码ID："+temp)
  }
 function del(temp){
	console.log("编码ID："+temp)
	alert("编码ID："+temp)
  }