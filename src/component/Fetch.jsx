import React from "react";
import $, { data } from 'jquery';

const Fetch = () => {

    // handler
    const getBtnClickHandler = () => {
        console.log("[Fetch] getBtnClickHandler()");

        getData();

    }

    const postBtnClickHandler = () => {
        console.log("[Fetch] postBtnClickHandler()");

        postData();

    }

    const putBtnClickHandler = () => {
        console.log("[Fetch] putBtnClickHandler()");

        putData();

    }

    const deleteBtnClickHandler = () => {
        console.log("[Fetch] deleteBtnClickHandler()");

        deleteData();

    }

    const transferFileBtnClickHandler = () => {
        console.log("[Fetch] transferFileBtnClickHandler()");

        transferFile();

    }

    const postFormDataBtnClickHandler = () => {
        console.log("[Fetch] postFormDataBtnClickHandler()");

        postFormData();

    }

    const putFormDataBtnClickHandler = () => {
        console.log("[Fetch] putFormDataBtnClickHandler()");

        putFormData();

    }

    const deleteFormDataBtnClickHandler = () => {
        console.log("[Fetch] deleteFormDataBtnClickHandler()");

        deleteFormData();

    }

    const deleteFormDataDtoBtnClickHandler = () => {
        console.log("[Fetch] deleteFormDataDtoBtnClickHandler()");

        deleteFormDataDto();

    }

    // 비동기
    async function getData() {

        const baseurl = 'http://localhost:8090/fetch/get_data';
        const params = {
            'id': 'gildong',
        }
        const queryString = new URLSearchParams(params).toString();
        const requestUrl = `${baseurl}?${queryString}`;

        await fetch(requestUrl, 
        {
            method: "get",
            credentials: "include",
        })
        .then((response) => {
            if (response.ok) {
                console.log("[Fetch] GET CUMMUNICATION SUCCESS!!");

                let promise_data = response.json();
                promise_data.then((result) => {
                    console.log("result: ", result);
                    console.log("data1: ", result.data1);
                    console.log("data2: ", result.data2);
                    console.log("data3: ", result.data3);
                });

            } else {
                console.log("[Fetch] GET CUMMUNICATION FAIL!!!");

            }
            
        });

    }

    async function postData() {
        
        const baseurl = 'http://localhost:8090/fetch/post_data';

        await fetch(baseurl, 
        {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'id': 'gildong',
            }),
            credentials: "include",
        })
        .then((response) => {
            if (response.ok) {
                console.log("[Fetch] POST CUMMUNICATION SUCCESS!!");

                let promise_data = response.json();
                promise_data.then((result) => {
                    console.log("result: ", result);
                    console.log("data1: ", result.data1);
                    console.log("data2: ", result.data2);
                    console.log("data3: ", result.data3);
                });

            } else {
                console.log("[Fetch] POST CUMMUNICATION FAIL!!!");

            }
            
        });

    }

    async function putData() {
        
        const baseurl = 'http://localhost:8090/fetch/put_data';

        await fetch(baseurl, 
        {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'id': 'gildong',
            }),
            credentials: "include",
        })
        .then((response) => {
            if (response.ok) {
                console.log("[Fetch] PUT CUMMUNICATION SUCCESS!!");

                let promise_data = response.json();
                promise_data.then((result) => {
                    console.log("result: ", result);
                    console.log("data1: ", result.data1);
                    console.log("data2: ", result.data2);
                    console.log("data3: ", result.data3);
                });

            } else {
                console.log("[Fetch] PUT CUMMUNICATION FAIL!!!");

            }
            
        });

    }

    async function deleteData() {
        
        const baseurl = 'http://localhost:8090/fetch/delete_data';

        await fetch(baseurl, 
        {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'id': 'gildong',
            }),
            credentials: "include",
        })
        .then((response) => {
            if (response.ok) {
                console.log("[Fetch] DELETE CUMMUNICATION SUCCESS!!");

                let promise_data = response.json();
                promise_data.then((result) => {
                    console.log("result: ", result);
                    console.log("data1: ", result.data1);
                    console.log("data2: ", result.data2);
                    console.log("data3: ", result.data3);
                });

            } else {
                console.log("[Fetch] DELETE CUMMUNICATION FAIL!!!");

            }
            
        });

    }

    async function transferFile() {

        const baseurl = 'http://localhost:8090/fetch/transfer_file';

        let attach_files = $('input[name="attach_file"]');
        let files = attach_files[0].files;

        let formData = new FormData();
        formData.append("id", "gildong");
        formData.append("attach_file", files[0]);
        
        await fetch(baseurl, 
        {
            method: "post",
            body: formData,
            credentials: "include",
        })
        .then((response) => {
            if (response.ok) {
                console.log("[Fetch] TRANSFER FILE CUMMUNICATION SUCCESS!!");

                let promise_data = response.json();
                promise_data.then((result) => {
                    console.log("result: ", result);
                    console.log("data1: ", result.data1);
                    console.log("data2: ", result.data2);
                    console.log("data3: ", result.data3);
                });

            } else {
                console.log("[Fetch] TRANSFER FILE CUMMUNICATION FAIL!!!");

            }
            
        });

    }

    async function postFormData() {

        const baseurl = 'http://localhost:8090/fetch/post_formdata';

        let formData = new FormData();
        formData.append("id", "gildong");
        formData.append("pw", "1234");
        
        await fetch(baseurl, 
        {
            method: "post",
            body: formData,
            credentials: "include",
        })
        .then((response) => {
            if (response.ok) {
                console.log("[Fetch] POST FORMDATA CUMMUNICATION SUCCESS!!");

                let promise_data = response.json();
                promise_data.then((result) => {
                    console.log("result: ", result);
                    console.log("data1: ", result.data1);
                    console.log("data2: ", result.data2);
                    console.log("data3: ", result.data3);
                });

            } else {
                console.log("[Fetch] POST FORMDATA CUMMUNICATION FAIL!!!");

            }
            
        });

    }

    async function putFormData() {

        const baseurl = 'http://localhost:8090/fetch/put_formdata';

        let formData = new FormData();
        formData.append("id", "gildong");
        formData.append("pw", "1234");
        
        await fetch(baseurl, 
        {
            method: "put",
            body: formData,
            credentials: "include",
        })
        .then((response) => {
            if (response.ok) {
                console.log("[Fetch] PUT FORMDATA CUMMUNICATION SUCCESS!!");

                let promise_data = response.json();
                promise_data.then((result) => {
                    console.log("result: ", result);
                    console.log("data1: ", result.data1);
                    console.log("data2: ", result.data2);
                    console.log("data3: ", result.data3);
                });

            } else {
                console.log("[Fetch] PUT FORMDATA CUMMUNICATION FAIL!!!");

            }
            
        });

    }

    async function deleteFormData() {

        const baseurl = 'http://localhost:8090/fetch/delete_formdata';

        let formData = new FormData();
        formData.append("id", "gildong");
        formData.append("pw", "1234");
        
        await fetch(baseurl, 
        {
            method: "delete",
            body: formData,
            credentials: "include",
        })
        .then((response) => {
            if (response.ok) {
                console.log("[Fetch] DELETE FORMDATA CUMMUNICATION SUCCESS!!");

                let promise_data = response.json();
                promise_data.then((result) => {
                    console.log("result: ", result);
                    console.log("data1: ", result.data1);
                    console.log("data2: ", result.data2);
                    console.log("data3: ", result.data3);
                });

            } else {
                console.log("[Fetch] DELETE FORMDATA CUMMUNICATION FAIL!!!");

            }
            
        });

    }

    async function deleteFormDataDto() {

        const baseurl = 'http://localhost:8090/fetch/delete_formdata_dto';

        let formData = new FormData();
        formData.append("id", "gildong");
        formData.append("pw", "1234");
        formData.append("email", "gildong@gmail.com");
        
        await fetch(baseurl, 
        {
            method: "delete",
            body: formData,
            credentials: "include",
        })
        .then((response) => {
            if (response.ok) {
                console.log("[Fetch] DELETE FORMDATA DTO CUMMUNICATION SUCCESS!!");

                let promise_data = response.json();
                promise_data.then((result) => {
                    console.log("result: ", result);
                    console.log("data1: ", result.data1);
                    console.log("data2: ", result.data2);
                    console.log("data3: ", result.data3);
                });

            } else {
                console.log("[Fetch] DELETE FORMDATA DTO CUMMUNICATION FAIL!!!");

            }
            
        });

    }

    /*
    조회: GET
    등록: POST
    수정: PUT
    삭제: DELETE
    */
    return(
        <>
            <input type="button" value="GET BUTTON" onClick={getBtnClickHandler} /> <br />       
            <input type="button" value="POST BUTTON" onClick={postBtnClickHandler} /> <br />
            <input type="button" value="PUT BUTTON" onClick={putBtnClickHandler} /> <br />
            <input type="button" value="DELETE BUTTON" onClick={deleteBtnClickHandler} /> <br /><br />
            <input type="file" name="attach_file" /> <br />
            <input type="button" value="TRANSFER FILE BUTTON" onClick={transferFileBtnClickHandler} /><br /> <br />
            <input type="button" value="POST BUTTON BY FORMDATA" onClick={postFormDataBtnClickHandler} /> <br />
            <input type="button" value="PUT BUTTON BY FORMDATA" onClick={putFormDataBtnClickHandler} /> <br />
            <input type="button" value="DELETE BUTTON BY FORMDATA" onClick={deleteFormDataBtnClickHandler} /> <br />
            <input type="button" value="DELETE BUTTON BY FORMDATA DTO" onClick={deleteFormDataDtoBtnClickHandler} /> <br />
        </>
    );
}

export default Fetch;