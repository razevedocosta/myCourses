import React, { useState } from "react";

import { Header } from '../../components/Header';
import { Form } from '../../components/Form';
import { TableCourses } from '../../components/TableCourses';

const Home: React.FC = () => {

    return (
        <>
            <Header />
            <Form />
            <TableCourses />
        </>
    )
}

export default Home;