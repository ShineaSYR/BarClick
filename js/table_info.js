// var deatilTable={    
//       list:[{
//             order_no: "",
//             create_time: "",
//             update_time: "",
//             order_type: "",
//             order_debt: "",
//             order_sumprice: "",
//             client_no: "",
//             user_no: ""
//       }]
// }
// var deatilTable = {
//       order_no = [],
//       create_time = [],
//       update_time = [],
//       order_type = [],
//       order_debt = [],
//       order_sumprice = [],
//       client_no = [],
//       user_no = []
// };
var deatilTable = [];
var order_no = [];
var create_time = [];
var update_time = [];
var order_type = [];
var order_debt = [];
var order_sumprice = [];
var client_no = [];
var user_no = [];

function getDetail(){

      $.ajax({
            type:'POST',
            url:"dataBack.json",
            dataType:"json",
            async:true,
            success:function(result){
                  if(result.code == 'N01'){
                        console.log("0000");
                        var length = result.contents.size;
                        //console.log(deatilTable.list[1]);
                        console.log(length);
                        for(var i=0;i<length;++i){
                              order_no[i]=result.contents.list[i].order_no;
                              create_time[i]=result.contents.list[i].create_time;
                              update_time[i]=result.contents.list[i].update_time;
                              order_type[i]=result.contents.list[i].order_type;
                              order_debt[i]=result.contents.list[i].order_debt;
                              order_sumprice[i]=result.contents.list[i].order_sumprice;
                              client_no[i]=result.contents.list[i].client_no;
                              user_no[i]=result.contents.list[i].user_no;
                        }
                        // console.log(order_type);
                        // console.log(order_sumprice);
                        for(var i=0;i<length;++i){
                              deatilTable[i]={
                                    data_01:order_no[i],
                                    data_02:create_time[i],
                                    data_03:update_time[i],
                                    data_04:order_type[i],
                                    data_05:order_debt[i],
                                    data_06:order_sumprice[i],
                                    data_07:client_no[i],
                                    data_08:user_no[i]
                              }
                        }
                        console.log(deatilTable);
                        $.each(deatilTable,function(index,element){
                              var itemHTML=[
                                    // '<tr><td>',element.list[0].order_no,
                                    // '</td><td>',element.list[0].create_time,
                                    // '</td><td>',element.list[0].update_time,
                                    // '</td><td>',element.list[0].order_type,
                                    // '</td><td>',element.list[0].order_debt,
                                    // '</td><td>',element.list[0].order_sumprice,
                                    // '</td><td>',element.list[0].client_no,
                                    // '</td><td>',element.list[0].user_no,
                                    // '</td></tr>'
                                    '<tr><td>',element.data_01,
                                    '</td><td>',element.data_02,
                                    '</td><td>',element.data_03,
                                    '</td><td>',element.data_04,
                                    '</td><td>',element.data_05,
                                    '</td><td>',element.data_06,
                                    '</td><td>',element.data_07,
                                    '</td><td>',element.data_08,
                                    '</td></tr>'
                              ].join('\n');
                              $(".info").append(itemHTML);
                        })
                  }
                        // console.log(deatilTable.list[0]);


            },
            error:function(result){
                  console.log("http error");
            }
      })
}
getDetail();

