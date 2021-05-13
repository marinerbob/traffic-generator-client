import React from 'react';

import { Layout, PageHeader } from 'antd';

const { Content } = Layout;

import 'common/scss/common.scss';

const App= () => (
    <>
        <PageHeader
            className="site-page-header"
            title="GUI генератора трафика"
            subTitle="Шаблон"
            
        />
        <Layout style={{ padding: '0 50px' }} className="site-layout">
            <Content>
                <div>
                    <h1>Это бойлерплейт для gui генератора трафика</h1>
                </div>
            </Content>
        </Layout>
    </>
);

export default App;