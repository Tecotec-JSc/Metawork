var idtr;
var projectIdM = $("#projectIdM").val();
$(document).on("click", "tr ", function () {
    idtr = this.id;
    $(this).addClass("selected").siblings().removeClass("selected");
})
function CreateNewTask() {
    GetTrId();
}
$(document).on("click", ".addNewTaskOutliner", function () {
    CreateNewTask();
})
function GetTrId() {
    var tr = $('#tableTaskOutline tr.selected');
    if (!tr || tr.length == 0 || tr[0].id == "tr-" + projectIdM + "-0") {

    } else {

    }
}