/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useFormik } from 'formik';
import Helmet from 'react-helmet';
import { Button, InputField } from '../components';
import { ForgetPasswordSchema } from '../utils/validation_shema';
import axiosInstance from '../APIs/axiosInstance';
import logo from '../public/ST-2.png';

const initialValues = {
    email: '',
    password: '',
    checked: false
}
const ForgetPassword = () => {


    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {

    }, [showAlert])

    const toggleAlert = () => {
        setShowAlert(false);
    }

    const enableLoading = () => {
        setLoading(true);
    };

    const disableLoading = () => {
        setLoading(false);
    };

    const getInputClasses = (fieldname) => {
        if (formik.touched[fieldname] && formik.errors[fieldname]) {
            return "border-red-500";
        }

        if (formik.touched[fieldname] && !formik.errors[fieldname]) {
            return "border-blue-500";
        }

        return "";
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues,
        validationSchema: ForgetPasswordSchema,
        validateOnBlur: true,
        onSubmit: (values, { setSubmitting, setStatus }) => {
            setTimeout(() => {
                enableLoading();
                console.log('values', values);
                // axiosInstance.ForgetPassword(username, email, password)
                //   .then((res) => {
                //     console.log('res >>', res);
                //     disableLoading();
                //     // setError(false);
                //     // setStatus(message);
                //     // setShowAlert(true);
                //   })
                //   .catch((e) => {
                //     console.log('Error', e)
                //     // setError(true)
                //     disableLoading();
                //     setSubmitting(false);
                //     // setStatus(e.response.data.message);
                //     // setShowAlert(true);
                //   });
            }, 1000);
        },
    });


    return (
        <div className="flex flex-col h-screen pt-5 p-5 xs:p-10 pb-2 space-y-5">
            {/*SEO Support*/}
            <Helmet>
                <title>Forget Password | Smart Tipz</title>
            </Helmet>
            {/*SEO Support End */}


            <div className="flex flex-col w-full lg:w-1/2">
                <span className="hidden lg:flex">
                    <Image src={logo} alt="brand logo" />
                </span>
            </div>


            <div className="flex flex-col w-full lg:flex-row pt-5 p-5 xs:p-10 pb-2 md:p-16 md:pb-1 md:pt-0">

                <div className="w-full h-full lg:w-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-52 lg:h-full w-full" viewBox="0 0 1142.849 851.56">
                        <rect id="Rectangle_295" data-name="Rectangle 295" width="1142.849" height="0.571" transform="translate(0 748.338)" fill="#ebebeb" />
                        <rect id="Rectangle_296" data-name="Rectangle 296" width="58.194" height="0.571" transform="translate(663.333 763.903)" fill="#ebebeb" />
                        <rect id="Rectangle_297" data-name="Rectangle 297" width="137.896" height="0.571" transform="translate(903.103 776.269)" fill="#ebebeb" />
                        <rect id="Rectangle_298" data-name="Rectangle 298" width="142.468" height="0.571" transform="translate(508.477 764.178)" fill="#ebebeb" />
                        <rect id="Rectangle_299" data-name="Rectangle 299" width="29.806" height="0.571" transform="translate(386.283 781.275)" fill="#ebebeb" />
                        <rect id="Rectangle_300" data-name="Rectangle 300" width="135.725" height="0.571" transform="translate(445.048 781.275)" fill="#ebebeb" />
                        <rect id="Rectangle_301" data-name="Rectangle 301" width="87.885" height="0.571" transform="translate(119.908 771.629)" fill="#ebebeb" />
                        <path id="Path_1032" data-name="Path 1032" d="M492.584,701.4H51.238A13.051,13.051,0,0,1,38.21,688.344V67.937A13.051,13.051,0,0,1,51.238,55H492.584a13.051,13.051,0,0,1,13.051,13.051V688.344A13.051,13.051,0,0,1,492.584,701.4ZM51.238,55.457a12.48,12.48,0,0,0-12.457,12.48V688.344a12.48,12.48,0,0,0,12.457,12.48H492.584a12.5,12.5,0,0,0,12.48-12.48V67.937a12.5,12.5,0,0,0-12.48-12.48Z" transform="translate(49.126 -55)" fill="#ebebeb" />
                        <path id="Path_1033" data-name="Path 1033" d="M708.92,701.4H267.551A13.074,13.074,0,0,1,254.5,688.344V67.937A13.074,13.074,0,0,1,267.551,55H708.92a13.051,13.051,0,0,1,13.006,12.937V688.344A13.051,13.051,0,0,1,708.92,701.4ZM267.551,55.457a12.5,12.5,0,0,0-12.48,12.48V688.344a12.5,12.5,0,0,0,12.48,12.48H708.92a12.5,12.5,0,0,0,12.48-12.48V67.937a12.5,12.5,0,0,0-12.48-12.48Z" transform="translate(327.21 -55)" fill="#ebebeb" />
                        <path id="Path_1034" data-name="Path 1034" d="M286.512,355.455H134.741L125.53,249.17H277.3Z" transform="translate(161.394 194.644)" fill="#e6e6e6" />
                        <path id="Path_1035" data-name="Path 1035" d="M289.952,355.455H138.181L128.97,249.17H280.74Z" transform="translate(165.816 194.644)" fill="#f0f0f0" />
                        <path id="Path_1036" data-name="Path 1036" d="M144.934,319.79l-5.074-60.64H245.985l5.074,60.64Z" transform="translate(179.818 207.475)" fill="#fff" />
                        <rect id="Rectangle_302" data-name="Rectangle 302" width="17.806" height="198.239" transform="translate(464.226 550.099)" fill="#e6e6e6" />
                        <rect id="Rectangle_303" data-name="Rectangle 303" width="12.366" height="198.239" transform="translate(475.288 550.099)" fill="#f0f0f0" />
                        <rect id="Rectangle_304" data-name="Rectangle 304" width="172.365" height="21.874" transform="translate(487.654 571.973) rotate(180)" fill="#f0f0f0" />
                        <rect id="Rectangle_305" data-name="Rectangle 305" width="17.806" height="176.365" transform="translate(303.563 571.973)" fill="#e6e6e6" />
                        <rect id="Rectangle_306" data-name="Rectangle 306" width="12.366" height="176.365" transform="translate(314.626 571.973)" fill="#f0f0f0" />
                        <rect id="Rectangle_307" data-name="Rectangle 307" width="17.806" height="176.365" transform="translate(176.822 571.973)" fill="#e6e6e6" />
                        <rect id="Rectangle_308" data-name="Rectangle 308" width="12.366" height="176.365" transform="translate(187.884 571.973)" fill="#f0f0f0" />
                        <rect id="Rectangle_309" data-name="Rectangle 309" width="17.806" height="176.365" transform="translate(351.541 571.973)" fill="#e6e6e6" />
                        <rect id="Rectangle_310" data-name="Rectangle 310" width="12.366" height="176.365" transform="translate(362.581 571.973)" fill="#f0f0f0" />
                        <rect id="Rectangle_311" data-name="Rectangle 311" width="138.468" height="21.874" transform="translate(176.822 550.099)" fill="#e6e6e6" />
                        <rect id="Rectangle_312" data-name="Rectangle 312" width="535.608" height="298.192" transform="translate(296.021 55.794)" fill="#e0e0e0" />
                        <rect id="Rectangle_313" data-name="Rectangle 313" width="562.328" height="298.192" transform="translate(298.718 55.794)" fill="#f5f5f5" />
                        <rect id="Rectangle_314" data-name="Rectangle 314" width="279.815" height="543.951" transform="translate(851.857 64.982) rotate(90)" fill="#fff" />
                        <path id="Path_1037" data-name="Path 1037" d="M326.4,363.245,429.1,83.43H259.616L156.92,363.245Z" transform="translate(201.752 -18.448)" fill="#f5f5f5" />
                        <path id="Path_1038" data-name="Path 1038" d="M374.362,363.245,477.058,83.43H349.2L246.5,363.245Z" transform="translate(316.925 -18.448)" fill="#f5f5f5" />
                        <rect id="Rectangle_315" data-name="Rectangle 315" width="45.531" height="284.798" transform="translate(955.856 463.54)" fill="#e6e6e6" />
                        <path id="Path_1039" data-name="Path 1039" d="M439.928,394.73h11.977V372.81H427.38Z" transform="translate(549.482 353.608)" fill="#fafafa" />
                        <rect id="Rectangle_316" data-name="Rectangle 316" width="45.531" height="284.798" transform="translate(536.065 463.54)" fill="#e6e6e6" />
                        <rect id="Rectangle_317" data-name="Rectangle 317" width="430.237" height="278.878" transform="translate(571.15 463.54)" fill="#fafafa" />
                        <path id="Path_1040" data-name="Path 1040" d="M667.39,341.475H253.45V262.71H667.39Zm-411.654-2.286H665.1V265H255.736Z" transform="translate(325.86 212.053)" fill="#e6e6e6" />
                        <path id="Path_1041" data-name="Path 1041" d="M567.458,295.4H307.277c-12.068,0-23.7-9.737-32-26.743l-.777-1.623H600.212l-.777,1.623C591.069,285.658,579.641,295.4,567.458,295.4ZM278.249,269.247c7.726,15.154,18.286,23.794,29.028,23.794H567.458c10.789,0,21.3-8.64,29.028-23.794Z" transform="translate(352.924 217.607)" fill="#e6e6e6" />
                        <path id="Path_1042" data-name="Path 1042" d="M261.857,394.73H249.88V372.81h24.526Z" transform="translate(321.271 353.608)" fill="#fafafa" />
                        <path id="Path_1043" data-name="Path 1043" d="M667.39,380.254H253.45V301.58H667.39Zm-411.654-2.286H665.1v-74.1H255.736Z" transform="translate(325.86 262.028)" fill="#e6e6e6" />
                        <path id="Path_1044" data-name="Path 1044" d="M567.458,334.278H307.277c-12.068,0-23.7-9.76-32-26.743l-.777-1.646H600.212l-.777,1.646C591.069,324.427,579.641,334.278,567.458,334.278Zm-289.209-26.1c7.726,15.154,18.286,23.817,29.028,23.817H567.458c10.789,0,21.3-8.663,29.028-23.817Z" transform="translate(352.924 267.569)" fill="#e6e6e6" />
                        <path id="Path_1045" data-name="Path 1045" d="M667.39,419.205H253.45V340.44H667.39Zm-411.654-2.286H665.1V342.726H255.736Z" transform="translate(325.86 311.99)" fill="#e6e6e6" />
                        <path id="Path_1046" data-name="Path 1046" d="M567.458,373.126H307.277c-12.068,0-23.7-9.737-32-26.72l-.777-1.646H600.212l-.777,1.646C591.069,363.388,579.641,373.126,567.458,373.126Zm-289.209-26.08c7.726,15.154,18.286,23.794,29.028,23.794H567.458c10.789,0,21.3-8.64,29.028-23.794Z" transform="translate(352.924 317.544)" fill="#e6e6e6" />
                        <path id="Path_1047" data-name="Path 1047" d="M152.454,274.28v5.531h-3.52l-2.926,43.36H102.946l-2.9-43.36H96.5V274.28Z" transform="translate(124.07 226.928)" fill="#e6e6e6" />
                        <path id="Path_1048" data-name="Path 1048" d="M192.5,255.29c-3.52-25.828-38.377-33.188-82.605-34.148C67.816,220.25,54.33,205.37,54.33,205.37s.137,60.274,60.777,82.125C172.683,308.2,196.043,281.164,192.5,255.29Z" transform="translate(69.852 138.331)" fill="#e6e6e6" />
                        <path id="Path_1049" data-name="Path 1049" d="M105.437,269.766c.731-10.606,17.691-30.125,58.491-21.257,29.485,6.423,40.457-8.869,40.457-8.869s-2.743,43.154-47.085,56.114C115.174,308.074,104.134,288.462,105.437,269.766Z" transform="translate(135.431 182.391)" fill="#e6e6e6" />
                        <path id="Path_1050" data-name="Path 1050" d="M115.97,354.524a1.577,1.577,0,0,0,1.211-.549c2.949-3.5.526-11.863-2.811-23.451-4.3-14.857-9.646-33.371-5.12-46.788a188.2,188.2,0,0,1,8.777-20.754c6.4-13.531,11.931-25.143,7.314-37.44a1.577,1.577,0,1,0-2.949,1.12c4.137,10.948-.868,21.554-7.223,34.994a195.63,195.63,0,0,0-8.914,21.074c-4.823,14.354.663,33.394,5.074,48.663,2.606,9.143,5.3,18.286,3.451,20.571a1.554,1.554,0,0,0,.183,2.286A1.509,1.509,0,0,0,115.97,354.524Z" transform="translate(134.2 162.958)" fill="#e6e6e6" />
                        <ellipse id="freepik--path--inject-49" cx="443.174" cy="25.874" rx="443.174" ry="25.874" transform="translate(128.25 799.812)" fill="#f5f5f5" />
                        <path id="Path_1051" data-name="Path 1051" d="M442.519,654.665H117.95L100.19,132.68H424.759Z" transform="translate(128.814 44.873)" fill="#714de1" />
                        <path id="Path_1052" data-name="Path 1052" d="M449.622,647.575H125.053L107.27,125.59H431.839Z" transform="translate(137.917 35.758)" fill="#714de1" />
                        <path id="Path_1053" data-name="Path 1053" d="M449.622,647.575H125.053L107.27,125.59H431.839Z" transform="translate(137.917 35.758)" fill="#fff" opacity="0.3" />
                        <ellipse id="Ellipse_29" data-name="Ellipse 29" cx="89.759" cy="92.868" rx="89.759" ry="92.868" transform="matrix(0.701, -0.713, 0.713, 0.701, 283.413, 309.944)" fill="#714de1" />
                        <path id="Path_1054" data-name="Path 1054" d="M298.274,233.519a73.142,73.142,0,0,1-7.886,35.885,72.205,72.205,0,0,1-64.914,39.451A78.308,78.308,0,0,1,157.909,269.4a76.548,76.548,0,0,1-10.331-35.885,72.32,72.32,0,0,1,72.777-75.428A78.537,78.537,0,0,1,298.274,233.519Z" transform="translate(189.655 77.542)" fill="#fff" />
                        <path id="Path_1055" data-name="Path 1055" d="M284.519,218.092a72.205,72.205,0,0,1-64.914,39.451,78.308,78.308,0,0,1-67.565-39.451A115.633,115.633,0,0,1,217.639,198a122.239,122.239,0,0,1,66.88,20.091Z" transform="translate(195.478 128.854)" fill="#714de1" opacity="0.6" />
                        <ellipse id="Ellipse_30" data-name="Ellipse 30" cx="33.005" cy="34.148" rx="33.005" ry="34.148" transform="matrix(0.701, -0.713, 0.713, 0.701, 364.205, 284.838)" fill="#714de1" opacity="0.6" />
                        <path id="Path_1056" data-name="Path 1056" d="M345.763,294.4H138.724L137.33,253.26H344.369Z" transform="translate(176.565 199.903)" fill="#fff" />
                        <path id="Path_1057" data-name="Path 1057" d="M346.876,326.573H139.814L138.42,285.43H345.481Z" transform="translate(177.967 241.264)" fill="#fff" />
                        <path id="Path_1058" data-name="Path 1058" d="M224.46,287.93l-49.9,6.857a3.474,3.474,0,0,0-3.017,4.114l6.56,33.44a4.023,4.023,0,0,0,4.434,3.131l49.9-6.857a3.5,3.5,0,0,0,2.994-4.137l-6.537-33.44a4,4,0,0,0-4.434-3.109ZM210.128,321.8l-9.143,1.211-.891-10.789a6.4,6.4,0,0,1-3.726-4.571,5.691,5.691,0,0,1,4.937-6.857,6.537,6.537,0,0,1,7.223,5.1,5.6,5.6,0,0,1-1.783,5.326Z" transform="translate(220.475 244.432)" fill="#714de1" />
                        <path id="Path_1059" data-name="Path 1059" d="M218.385,302.633h0a3.566,3.566,0,0,1-3.931-2.766l-.64-3.268a18.811,18.811,0,0,0-19.7-14.994,16,16,0,0,0-14.766,19.177l.731,3.771a3.063,3.063,0,0,1-2.674,3.657h0a3.52,3.52,0,0,1-3.931-2.766l-.617-3.177a22.514,22.514,0,0,1,18.286-26.857A25.6,25.6,0,0,1,220.4,295.228l.731,3.749a3.063,3.063,0,0,1-2.743,3.657Z" transform="translate(221.612 227.923)" fill="#714de1" />
                        <path id="Path_1060" data-name="Path 1060" d="M290.989,343.708H156.2l-.891-26.788H290.075Z" transform="translate(199.682 281.75)" fill="#714de1" />
                        <path id="Path_1061" data-name="Path 1061" d="M194.7,266.49a7.223,7.223,0,0,1-7.268,7.52,7.863,7.863,0,0,1-7.794-7.52,7.223,7.223,0,0,1,7.269-7.52,7.84,7.84,0,0,1,7.794,7.52Z" transform="translate(230.947 207.244)" fill="#263238" />
                        <path id="Path_1062" data-name="Path 1062" d="M180.463,266.49a7.2,7.2,0,0,1-7.268,7.52,7.84,7.84,0,0,1-7.771-7.52,7.223,7.223,0,0,1,7.268-7.52,7.817,7.817,0,0,1,7.771,7.52Z" transform="translate(212.677 207.244)" fill="#263238" />
                        <path id="Path_1063" data-name="Path 1063" d="M166.333,266.49a7.223,7.223,0,0,1-7.268,7.52,7.817,7.817,0,0,1-7.771-7.52,7.223,7.223,0,0,1,7.268-7.52A7.817,7.817,0,0,1,166.333,266.49Z" transform="translate(194.51 207.244)" fill="#263238" />
                        <path id="Path_1064" data-name="Path 1064" d="M208.852,266.452a7.223,7.223,0,0,1-7.268,7.52,7.817,7.817,0,0,1-7.771-7.52A7.2,7.2,0,0,1,201.1,259,7.817,7.817,0,0,1,208.852,266.452Z" transform="translate(249.179 207.282)" fill="#263238" />
                        <path id="Path_1065" data-name="Path 1065" d="M223.023,266.49a7.2,7.2,0,0,1-7.269,7.52,7.84,7.84,0,0,1-7.771-7.52,7.223,7.223,0,0,1,7.269-7.52,7.817,7.817,0,0,1,7.771,7.52Z" transform="translate(267.396 207.244)" fill="#263238" />
                        <path id="Path_1066" data-name="Path 1066" d="M345.648,174.28c3.04,4.891,5.577,9.554,8.183,14.423s4.96,9.76,7.268,14.766a211.109,211.109,0,0,1,11.657,31.383c.411,1.349.708,2.789,1.051,4.183l.5,2.126.251,1.051.3,1.737a31.271,31.271,0,0,1-.709,11.794,66.837,66.837,0,0,1-7.131,17.028,135.357,135.357,0,0,1-20.3,26.583l-9.623-7.268a254.631,254.631,0,0,0,12.868-27.428,56.826,56.826,0,0,0,3.5-12.868,10.193,10.193,0,0,0-.183-4.046l-.914-2.789c-.366-1.143-.709-2.286-1.143-3.451a259.212,259.212,0,0,0-12.046-27.611c-4.571-9.143-9.486-18.286-14.4-27.017Z" transform="translate(417.569 98.358)" fill="#ff8b7b" />
                        <path id="Path_1067" data-name="Path 1067" d="M337.154,224.43l-10.514,5.554,12.068,14.126s7.543-5.1,7.886-12.869Z" transform="translate(419.96 162.836)" fill="#ff8b7b" />
                        <path id="Path_1068" data-name="Path 1068" d="M320.47,235.569l12.914,10.263,13.257-4.846L334.573,226.86Z" transform="translate(412.028 165.96)" fill="#ff8b7b" />
                        <path id="Path_1069" data-name="Path 1069" d="M302.885,143.051c-.251,1.28-1.143,2.171-1.966,2.011s-1.3-1.349-1.051-2.606,1.143-2.286,1.989-2.011S303.136,141.771,302.885,143.051Z" transform="translate(385.453 54.799)" fill="#263238" />
                        <path id="Path_1070" data-name="Path 1070" d="M305.354,142.52a46.308,46.308,0,0,1-8.274,9.646,7.52,7.52,0,0,0,5.851,2.286Z" transform="translate(381.956 57.524)" fill="#ff5652" />
                        <path id="Path_1071" data-name="Path 1071" d="M298.9,170.574V155.58l19.84,2.286s-.32,12.891-11.428,16.686Z" transform="translate(384.295 74.316)" fill="#ff8b7b" />
                        <path id="Path_1072" data-name="Path 1072" d="M304.563,150.86l13.966,4.023.251,9.166-19.84-2.4Z" transform="translate(384.347 68.247)" fill="#ff8b7b" />
                        <path id="Path_1073" data-name="Path 1073" d="M316.9,154.883,302.93,150.86l-2.72,5.211A22.24,22.24,0,0,0,313.1,175.454a21.851,21.851,0,0,0,4.046-11.428Z" transform="translate(385.979 68.247)" opacity="0.2" />
                        <path id="Path_1074" data-name="Path 1074" d="M307.493,141.049a.777.777,0,0,0,.571-1.28,7.589,7.589,0,0,0-6.491-2.514.754.754,0,0,0-.617.869.777.777,0,0,0,.869.64h0a6.011,6.011,0,0,1,5.12,2.034.777.777,0,0,0,.548.251Z" transform="translate(386.925 50.699)" fill="#263238" />
                        <path id="Path_1075" data-name="Path 1075" d="M336.477,151.68c-2.286,11.771-3.7,28.068,4.571,35.908,0,0-3.2,11.931-25.143,11.931-24.023,0-11.543-10.469-11.543-10.469,9.988-3.109,9.9-14.468,7.611-23.611Z" transform="translate(387.152 69.301)" fill="#ff8b7b" />
                        <path id="Path_1076" data-name="Path 1076" d="M345.045,180.046c2.149-3.017,2.057-12.594-.229-14.286-3.68-2.72-19.474-3.36-40.708,1.531,2.286,9.28-2.629,14.126-2.629,14.126Z" transform="translate(387.612 84.707)" fill="#714de1" />
                        <path id="Path_1077" data-name="Path 1077" d="M354.342,410.158a5.234,5.234,0,0,1-4.023-.229,1.554,1.554,0,0,1-.366-1.76,1.759,1.759,0,0,1,.983-1.12c2.171-1.051,7.154.983,7.383,1.074a.366.366,0,0,1,.229.343.434.434,0,0,1-.206.366A22.479,22.479,0,0,1,354.342,410.158Zm-2.629-2.583a1.919,1.919,0,0,0-.434.16.96.96,0,0,0-.594.64c-.206.686,0,.914.137.983.869.731,4.069,0,6.331-.846A12.549,12.549,0,0,0,351.713,407.575Z" transform="translate(449.767 397.242)" fill="#714de1" />
                        <path id="Path_1078" data-name="Path 1078" d="M356.853,411.3h-.183c-1.828-.526-5.714-3.291-5.76-5.1a1.257,1.257,0,0,1,.983-1.234,1.966,1.966,0,0,1,1.669.137c2.149,1.1,3.52,5.531,3.566,5.737a.366.366,0,0,1,0,.366A.32.32,0,0,1,356.853,411.3Zm-4.571-5.691H352.1c-.457.16-.457.389-.457.5,0,1.074,2.606,3.246,4.571,4.114-.48-1.28-1.531-3.817-2.926-4.571a1.326,1.326,0,0,0-.983-.046Z" transform="translate(451.165 394.796)" fill="#714de1" />
                        <path id="Path_1079" data-name="Path 1079" d="M302.658,411.6c-2.057,0-4.046-.3-4.709-1.211a1.44,1.44,0,0,1,0-1.669,1.9,1.9,0,0,1,1.211-.891c2.674-.731,8.3,2.469,8.526,2.606a.343.343,0,0,1,.183.389.366.366,0,0,1-.3.32,27.889,27.889,0,0,1-4.914.457Zm-2.537-3.131a2.283,2.283,0,0,0-.731,0,1.166,1.166,0,0,0-.754.526c-.274.48-.16.709,0,.846.754,1.051,4.8,1.074,7.794.64a17.4,17.4,0,0,0-6.309-2.012Z" transform="translate(382.731 398.495)" fill="#714de1" />
                        <path id="Path_1080" data-name="Path 1080" d="M305.185,413.293h-.16c-1.943-.869-5.783-4.343-5.486-6.171,0-.434.366-.96,1.417-1.051a2.743,2.743,0,0,1,2.1.64,10.926,10.926,0,0,1,2.514,6.194.457.457,0,0,1-.16.343.434.434,0,0,1-.229.046Zm-3.931-6.514h-.229c-.686,0-.731.32-.731.411-.183,1.1,2.423,3.84,4.411,5.029a8.846,8.846,0,0,0-2.126-4.96,2.011,2.011,0,0,0-1.349-.48Z" transform="translate(385.096 396.347)" fill="#714de1" />
                        <path id="Path_1081" data-name="Path 1081" d="M319.658,430H303.59l-1.6-37.234h16.068Z" transform="translate(388.268 379.271)" fill="#ff8b7b" />
                        <path id="Path_1082" data-name="Path 1082" d="M379.067,425.3l-15.7,3.406L347.57,394.036,363.3,390.63Z" transform="translate(446.87 376.519)" fill="#ff8b7b" />
                        <path id="Path_1083" data-name="Path 1083" d="M366.662,408.764l17.668-3.817a1.394,1.394,0,0,1,1.554.777l6.126,13.3a2.286,2.286,0,0,1-1.691,3.291c-6.171,1.211-9.257,1.509-17.006,3.177-4.777,1.051-15.566,3.68-22.171,5.1s-8.869-4.914-6.286-6.08c11.543-5.28,16.343-9.92,19.474-14.24A3.909,3.909,0,0,1,366.662,408.764Z" transform="translate(442.041 394.888)" fill="#263238" />
                        <path id="Path_1084" data-name="Path 1084" d="M324.564,408.24h17.554a1.417,1.417,0,0,1,1.371,1.1l3.177,14.286a2.286,2.286,0,0,1-2.286,2.88c-6.331-.114-15.474-.48-23.428-.48-9.326,0-17.348.5-28.274.5-6.606,0-8.434-6.674-5.669-7.291,12.571-2.743,22.857-3.04,33.714-9.737a7.475,7.475,0,0,1,3.84-1.257Z" transform="translate(367.409 399.16)" fill="#263238" />
                        <path id="Path_1085" data-name="Path 1085" d="M342.564,169.248c15.063,3.451,27.428,41.92,27.428,41.92l-30.1,23.017a66.124,66.124,0,0,1-16-29.714C318.564,184.311,327.158,165.682,342.564,169.248Z" transform="translate(414.391 91.322)" fill="#714de1" />
                        <path id="Path_1086" data-name="Path 1086" d="M342.564,169.248c15.063,3.451,27.428,41.92,27.428,41.92l-30.1,23.017a66.124,66.124,0,0,1-16-29.714C318.564,184.311,327.158,165.682,342.564,169.248Z" transform="translate(414.391 91.322)" opacity="0.4" />
                        <path id="Path_1087" data-name="Path 1087" d="M322.444,227.538c-3.749,4.046-7.5,7.657-11.428,11.428-1.943,1.829-3.909,3.657-5.92,5.417l-3.04,2.674-.754.663-1.3,1.051a18.286,18.286,0,0,1-4.411,2.606,14.377,14.377,0,0,1-5.577,1.143,13.713,13.713,0,0,1-4.8-.846,13.508,13.508,0,0,1-4.572-2.9,13.714,13.714,0,0,1-3.566-5.92,15.569,15.569,0,0,1-.663-3.406,23.089,23.089,0,0,1,0-4.069c.114-1.1.251-2.057.434-2.949a56.6,56.6,0,0,1,2.651-9.143,81.836,81.836,0,0,1,3.543-8.274c1.463-2.9,2.857-5.028,4.251-7.451A186.631,186.631,0,0,1,306.6,181.367a176.965,176.965,0,0,1,23.428-22.217l8.411,8.663c-5.9,7.909-11.7,16.388-17.074,24.731a268.011,268.011,0,0,0-14.628,25.714c-.983,2.149-2.286,4.571-2.9,6.309a61.31,61.31,0,0,0-2.126,6.171,39.886,39.886,0,0,0-1.3,5.76,9.01,9.01,0,0,0,0,.914v-.206a6.354,6.354,0,0,0-.3-1.509,9.8,9.8,0,0,0-2.629-4.251,11.2,11.2,0,0,0-3.771-2.286,10.925,10.925,0,0,0-3.84-.709,9.326,9.326,0,0,0-3.68.709,8.41,8.41,0,0,0-1.143.571l.869-.8,2.766-2.514,5.463-5.12c3.611-3.406,7.246-7.04,10.674-10.423Z" transform="translate(355.265 78.906)" fill="#ff8b7b" />
                        <path id="Path_1088" data-name="Path 1088" d="M329.274,181.36c8.183,8.091,10.857,22.857,11.429,35.657l-1.326,1.029a66.125,66.125,0,0,1-16-29.714c-.3-1.189-.571-2.286-.777-3.589Z" transform="translate(414.767 107.461)" opacity="0.2" />
                        <path id="Path_1089" data-name="Path 1089" d="M291.057,187.4c-3.291,17.371-5.349,53.051,4.183,123.679H381.32c.594-13.188-7.7-77.6,5.029-139.793a226.291,226.291,0,0,0-28.8-3.634,319.379,319.379,0,0,0-36.571,0c-4.023.366-8,.96-11.429,1.577A22.857,22.857,0,0,0,291.057,187.4Z" transform="translate(370.675 89.166)" fill="#714de1" />
                        <path id="Path_1090" data-name="Path 1090" d="M291.057,187.4c-3.291,17.371-5.349,53.051,4.183,123.679H381.32c.594-13.188-7.7-77.6,5.029-139.793a226.291,226.291,0,0,0-28.8-3.634,319.379,319.379,0,0,0-36.571,0c-4.023.366-8,.96-11.429,1.577A22.857,22.857,0,0,0,291.057,187.4Z" transform="translate(370.675 89.166)" opacity="0.4" />
                        <path id="Path_1091" data-name="Path 1091" d="M304.214,189.366l-15.543-3.726c-.48,9.417-.526,21.074.16,35.5C295.986,213,305.129,200.291,304.214,189.366Z" transform="translate(370.684 112.964)" opacity="0.2" />
                        <path id="Path_1092" data-name="Path 1092" d="M301.99,392.77l.823,19.2H318.9l-.823-19.2Z" transform="translate(388.268 379.271)" opacity="0.2" />
                        <path id="Path_1093" data-name="Path 1093" d="M363.3,390.63l-15.726,3.406,8.137,17.874,15.726-3.406Z" transform="translate(446.87 376.519)" opacity="0.2" />
                        <path id="Path_1094" data-name="Path 1094" d="M346.854,159.67c-4.114,15.406-5.76,24.64-15.268,31.04-14.286,9.737-32.114-1.417-32.571-17.691-.5-14.7,6.331-37.44,22.857-40.548a21.76,21.76,0,0,1,24.983,27.2Z" transform="translate(384.41 44.123)" fill="#ff8b7b" />
                        <path id="Path_1095" data-name="Path 1095" d="M305.495,157.942c-.777-2.057-4.32-17.988-.983-22.126s41.394-1.143,47.017,4.389c9.349,9.143,2.857,17.371-7.36,27.954-7.68,7.954-7.977,16.914-11.863,18.286-6.857,2.286-17.326.137-19.428-7.109S305.495,157.942,305.495,157.942Z" transform="translate(389.701 46.422)" fill="#263238" />
                        <path id="Path_1096" data-name="Path 1096" d="M351.681,130.224c-13.44-5.714-38.651.617-52.274-2.674A20.983,20.983,0,0,0,316.8,148.944a179.776,179.776,0,0,0,34.285,3.177C366.035,151.436,363.109,135.093,351.681,130.224Z" transform="translate(384.931 38.277)" fill="#263238" />
                        <path id="Path_1097" data-name="Path 1097" d="M323.19,138.39a25.622,25.622,0,0,0,14.24-2.72C339.944,141.75,326.116,143.419,323.19,138.39Z" transform="translate(415.525 48.717)" fill="#263238" />
                        <path id="Path_1098" data-name="Path 1098" d="M314.378,148.445a18.08,18.08,0,0,1-4.571,10.674c-3.52,3.863-7.177,1.44-7.794-3.246-.549-4.251.594-11.428,4.891-13.486S314.675,143.668,314.378,148.445Z" transform="translate(388.132 56.559)" fill="#ff8b7b" />
                        <path id="Path_1099" data-name="Path 1099" d="M304.69,230.166s18.286,122.856,28.274,168.89c10.949,50.4,69.782,217.141,69.782,217.141l28.777-6.24S390.381,474.05,381.238,403.582c-7.086-54.125-21.006-173.462-21.006-173.462Z" transform="translate(391.74 170.152)" fill="#714de1" />
                        <path id="Path_1100" data-name="Path 1100" d="M344.571,398.4c-.114,0,5.371,10.423,5.371,10.423l32.365-7.017-2.72-9.737Z" transform="translate(443.012 378.37)" fill="#263238" />
                        <path id="Path_1101" data-name="Path 1101" d="M312.414,249.387c21.1,4.137,18.857,82.811,16.32,123.291-6.08-28.617-14.994-83.657-21.074-122.719A7.2,7.2,0,0,1,312.414,249.387Z" transform="translate(395.558 194.701)" opacity="0.3" />
                        <path id="Path_1102" data-name="Path 1102" d="M292,230.191s-2.286,120.2-.457,169.142c1.829,50.994,19.634,217.964,19.634,217.964h27.246s.983-164,2.286-214.079c1.326-54.583,7.909-173.119,7.909-173.119Z" transform="translate(373.919 170.126)" fill="#714de1" />
                        <path id="Path_1103" data-name="Path 1103" d="M297.444,394.8c-.137,0,1.531,11.291,1.531,11.291H332.1l.914-10.08Z" transform="translate(382.414 381.88)" fill="#263238" />
                        <path id="Path_1104" data-name="Path 1104" d="M336.418,191.467c7.7,20.777-37.577,45.257-37.577,45.257L279.23,211.581s13.188-26.1,29.188-37.851C328.19,159.239,330.544,175.65,336.418,191.467Z" transform="translate(359.006 90.451)" fill="#714de1" />
                        <path id="Path_1105" data-name="Path 1105" d="M336.418,191.467c7.7,20.777-37.577,45.257-37.577,45.257L279.23,211.581s13.188-26.1,29.188-37.851C328.19,159.239,330.544,175.65,336.418,191.467Z" transform="translate(359.006 90.451)" opacity="0.4" />
                        <ellipse id="Ellipse_31" data-name="Ellipse 31" cx="82.491" cy="52.571" rx="82.491" ry="52.571" transform="translate(790.349 19.04)" fill="#714de1" />
                        <path id="Path_1106" data-name="Path 1106" d="M381.777,123.951a23.108,23.108,0,0,1-22.7-19.177A23.36,23.36,0,0,1,376.7,78.443h0a22.994,22.994,0,0,1,24.731,10.331l52.96-10.926a8.274,8.274,0,0,1,9.691,5.691,7.977,7.977,0,0,1-6.1,9.851l-1.371.274a1.348,1.348,0,0,0-.96.709,1.44,1.44,0,0,0,0,1.189l.937,2.423a3.634,3.634,0,0,1-1.417,4.411,4.343,4.343,0,0,0-2.034,3.223,3.589,3.589,0,0,1-2.766,3.177l-1.074.229A3.566,3.566,0,0,1,445.5,107.2a4.457,4.457,0,0,0-8.251,1.714,3.543,3.543,0,0,1-2.743,3.154l-1.074.229a3.589,3.589,0,0,1-3.794-1.829,4.571,4.571,0,0,0-3.177-2.149,3.634,3.634,0,0,1-3.2-3.589v-2.606a1.417,1.417,0,0,0-1.691-1.326l-16.891,3.474a23.017,23.017,0,0,1-18.171,19.2,23.679,23.679,0,0,1-4.731.48Zm-4.571-43.428a21.051,21.051,0,0,0-16,23.817,20.823,20.823,0,0,0,41.143-1.189v-.823l18.628-3.771a3.7,3.7,0,0,1,4.571,3.474v2.606a1.349,1.349,0,0,0,1.1,1.3,6.651,6.651,0,0,1,4.823,3.269,1.326,1.326,0,0,0,1.349.731l1.051-.229a1.28,1.28,0,0,0,.96-1.189,6.743,6.743,0,0,1,12.571-2.651,1.3,1.3,0,0,0,1.326.731l1.1-.229a1.28,1.28,0,0,0,.937-1.189,6.628,6.628,0,0,1,3.131-4.914,1.394,1.394,0,0,0,.48-1.646l-.937-2.423a3.68,3.68,0,0,1,2.7-4.937l1.394-.3a5.737,5.737,0,0,0,4.366-7.017,5.966,5.966,0,0,0-7.04-4.046L400.405,91.22l-.411-.709a20.571,20.571,0,0,0-22.674-9.943Zm4.571,34.925a14.054,14.054,0,1,1,2.971-.183h0a14.561,14.561,0,0,1-2.949.229Zm0-26.994a13.716,13.716,0,0,0-2.537.251,12.4,12.4,0,0,0,5.166,24.251h0a12.366,12.366,0,0,0,4.3-22.423,12.159,12.159,0,0,0-6.834-2.034Z" transform="translate(461.303 -25.872)" fill="#fff" />
                        <ellipse id="Ellipse_32" data-name="Ellipse 32" cx="27.108" cy="17.28" rx="27.108" ry="17.28" transform="translate(778.601 120.456)" fill="#714de1" opacity="0.6" />
                        <ellipse id="Ellipse_33" data-name="Ellipse 33" cx="11.131" cy="7.086" rx="11.131" ry="7.086" transform="translate(751.446 147.93)" fill="#714de1" opacity="0.3" />
                    </svg>

                </div>

                <div className="flex flex-col w-full lg:w-1/2 items-center">
                    <div className="flex flex-col w-full lg:max-w-md mt-4 lg:mt-0 space-y-2">
                        <p className=" font-bold text-3xl text-center lg:text-left lg:text-3xl">Forget Password</p>
                        <p className="text-gray-400 text-md text-center lg:text-left">Enter you email address associated to your account</p>
                    </div>
                    <div className="flex w-full lg:max-w-md justify-evenly flex-col mt-6">
                        <form className="w-full" onSubmit={formik.handleSubmit}>
                            {
                                showAlert === true ? (

                                    <div className={`${error ? 'bg-red-100 border border-red-400 text-red-700' : 'bg-green-100 border border-green-400 text-green-700'} px-4 py-3 flex flex-row w-full justify-between items-center mb-10 rounded" role="alert`}>
                                        <span className="block sm:inline">{formik.status}</span>
                                        <span className="relative px-4 py-3">
                                            <svg onClick={() => toggleAlert} className="fill-current h-6 w-6 text-black" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                                        </span>
                                    </div>
                                ) : ('')
                            }

                            <InputField
                                name={"email"}
                                type={"email"}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && formik.errors.email}
                                svg={(
                                    <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                                )}
                                inputClass={`${getInputClasses(
                                    "email"
                                )} border bg-gray-50 text-sm border-gray-200 focus:outline-none rounded-md focus:shadow-sm w-full px-2 py-3  h-12`}
                                label={'Email'}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-700 text-sm mb-4" >{formik.errors.email}</div>
                            ) : null}



                            <Button
                                type={"submit"}
                                classNames={"flex w-full mt-5 justify-center bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-md"}
                                childrens={'Next'}
                                loading={loading}
                            />
                            <div className="flex mt-3 w-full ">
                                <p className="text-sm w-full text-gray-500 text-center ">
                                    <Link
                                        href="/forgot-password">
                                        <a className="text-blue-800 text-sm font-semibold hover:underline"
                                        >Try another way
                                        </a>
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <span className="flex w-full justify-center lg:hidden pt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-2" width="185" height="6" viewBox="0 0 185 6">
                        <rect id="_-" data-name="-" width="185" height="6" rx="3" fill="#714de1" />
                    </svg>
                </span>
            </div>
        </div>
    )
}

export default ForgetPassword;
