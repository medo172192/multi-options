$(function(){

    const htmlTemplate = `
        <div class="row-parrent">

            <div class="row row-parent-domain">
                <label for="">Please add question header:-</label>
                <div class="col-lg-7 d-flex justify-content-center mb-3 mt-2">
                    <input type="text" name="" id="" class="form-control" >
                </div>
                <div class="col-lg-2 mt-2">
                    <select name="" id="" class="form-control " chooseRowType>
                        <option value="1">input</option>
                        <option value="2">checkbox</option>
                        <option value="3" selected>input-checkbox</option>
                    </select>
                </div>
                <div class="col-1 mb-2 mt-2 me-2 ms-2">
                    <button type="button" class="btn btn-danger delete-specific-row "  >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-shield-fill-x" viewBox="0 0 16 16">
                            <path d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0M6.854 5.146 8 6.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 7l1.147 1.146a.5.5 0 0 1-.708.708L8 7.707 6.854 8.854a.5.5 0 1 1-.708-.708L7.293 7 6.146 5.854a.5.5 0 1 1 .708-.708"/>
                        </svg>
                    </button>
                </div>  
                <div class="col-1 mb-2 mt-2 me-2 ms-2 addnewoption-parent">
                    <button type="button" class="btn btn-primary  " addNewOption>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-node-plus-fill" viewBox="0 0 16 16">
                            <path d="M11 13a5 5 0 1 0-4.975-5.5H4A1.5 1.5 0 0 0 2.5 6h-1A1.5 1.5 0 0 0 0 7.5v1A1.5 1.5 0 0 0 1.5 10h1A1.5 1.5 0 0 0 4 8.5h2.025A5 5 0 0 0 11 13m.5-7.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2a.5.5 0 0 1 1 0"/>
                        </svg>
                    </button>
                </div>
               
            </div>
            <!-- options -->
            <div class="row options-parrent">

                <div class="col-lg-8 mt-3 remove-specific-option">
                    <div class="row">

                        <div class="col-10 mb-2">
                            <input type="text" name="" id="" class="form-control">
                        </div>
                        <div class="col-2 mb-2">
                            <button type="button" class="btn btn-danger" removeSpecificOption>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-node-minus-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M16 8a5 5 0 0 1-9.975.5H4A1.5 1.5 0 0 1 2.5 10h-1A1.5 1.5 0 0 1 0 8.5v-1A1.5 1.5 0 0 1 1.5 6h1A1.5 1.5 0 0 1 4 7.5h2.025A5 5 0 0 1 16 8m-2 0a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5A.5.5 0 0 0 14 8"/>
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
                
            </div>

        </div>
    `;
    // add new row
    $("[addNewRow]").on('click',function(){
        $(".full-parent").append(htmlTemplate);
    });

    // delete specific row
    $(document).on('click',".delete-specific-row",function(){
        var confirm = window.confirm("Are you sure from delete row?");
        if(confirm){
            $(this).parents(".row-parrent").remove();
        }
    });

    const htmlContent = `
        <div class="col-lg-8 mt-3  remove-specific-option">
            <div class="row">

                <div class="col-10 mb-2">
                    <input type="text" name="" id="" class="form-control">
                </div>
                <div class="col-2 mb-2">
                    <button type="button" class="btn btn-danger" removeSpecificOption>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-node-minus-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M16 8a5 5 0 0 1-9.975.5H4A1.5 1.5 0 0 1 2.5 10h-1A1.5 1.5 0 0 1 0 8.5v-1A1.5 1.5 0 0 1 1.5 6h1A1.5 1.5 0 0 1 4 7.5h2.025A5 5 0 0 1 16 8m-2 0a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5A.5.5 0 0 0 14 8"/>
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    `;

    const btnAddNewRow  = `
        <button type="button" class="btn btn-primary  " addNewOption>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-node-plus-fill" viewBox="0 0 16 16">
                <path d="M11 13a5 5 0 1 0-4.975-5.5H4A1.5 1.5 0 0 0 2.5 6h-1A1.5 1.5 0 0 0 0 7.5v1A1.5 1.5 0 0 0 1.5 10h1A1.5 1.5 0 0 0 4 8.5h2.025A5 5 0 0 0 11 13m.5-7.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2a.5.5 0 0 1 1 0"/>
            </svg>
        </button>
    `;

    //when choose type
    $(document).on("change","[chooseRowType]",function(){
        var type = $(this).val();
        var parentElement  =$(this).parents(".row-parrent").find(".options-parrent");
        var rowParentDomain = $(this).parents(".row-parent-domain").find(".addnewoption-parent");
        if( type == '1'){
            // delete options
            parentElement.html("");
            rowParentDomain.html("");
        } else{
            if(parentElement.is(':empty')){
                parentElement.html(htmlContent);
                rowParentDomain.html(btnAddNewRow);
            }
        }
    });

    // add new option
    $(document).on('click',"[addNewOption]",function(){
        $(this).parents(".row-parrent").find(".options-parrent").append(htmlContent);
    });

    // remove specific option
    $(document).on('click',"[removeSpecificOption]",function(){
       
        $(this).parents(".remove-specific-option").remove();

    });


});