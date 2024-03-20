import React from "react";
import $ from 'jquery';

const Fetch = () => {

    // handler
    const getBtnClickHandler = () => {
        console.log("[Axios] getBtnClickHandler()");

        getData();

    }

    const postBtnClickHandler = () => {
        console.log("[Axios] postBtnClickHandler()");

        postData();

    }

    const putBtnClickHandler = () => {
        console.log("[Axios] putBtnClickHandler()");

        putData();

    }

    const deleteBtnClickHandler = () => {
        console.log("[Axios] deleteBtnClickHandler()");

        deleteData();

    }

    const transferFileBtnClickHandler = () => {
        console.log("[Axios] transferFileBtnClickHandler()");

        transferFile();

    }

    const postFormDataBtnClickHandler = () => {
        console.log("[Axios] postFormDataBtnClickHandler()");

        postFormData();

    }

    const putFormDataBtnClickHandler = () => {
        console.log("[Axios] putFormDataBtnClickHandler()");

        putFormData();

    }

    const deleteFormDataBtnClickHandler = () => {
        console.log("[Axios] deleteFormDataBtnClickHandler()");

        deleteFormData();

    }

    const deleteFormDataDtoBtnClickHandler = () => {
        console.log("[Axios] deleteFormDataDtoBtnClickHandler()");

        deleteFormDataDto();

    }

    // 비동기
    async function getData() {
        
    }

    async function postData() {
        
    }

    async function putData() {
        
    }

    async function deleteData() {
        
    }

    async function transferFile() {

        

    }

    async function postFormData() {

        

    }

    async function putFormData() {

        

    }

    async function deleteFormData() {

        

    }

    async function deleteFormDataDto() {

        

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