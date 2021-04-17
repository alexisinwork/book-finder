import React, { ReactElement, useEffect, useState } from 'react';

import './App.less';
import 'antd/dist/antd.less';

import { Layout, Row, Col, Card, Divider, Typography, Breadcrumb } from 'antd';
import {
  FileSearchOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Paragraph, Text, Title, Link } = Typography;

const url = 'https://www.googleapis.com/books/v1/volumes?q=keese&orderBy=newest';

export type Book = {
  kind: string;
  id: string;
  selfLink: string;
  totalItems: number;
  saleInfo: {
    country: string;
    saleability: string;
    isEbook: boolean;
    buyLink: string;
  },
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: Array<string>;
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: Array<{ type: string; identifier: string }>;
    pageCount: number;
    categories: Array<string>;
    maturityRating: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    language: string;
    previewLink: string;
  };
};

export type BookAPI = {
  kind: 'books#volumes';
  totalItems: number;
  items: Array<Book>;
};

const App = (): ReactElement => {
  const [books, setBooks] = useState<Array<Book>>([]);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    async function getRecipes() {
      fetch(url)
        .then((res) => res.json())
        .then((res: BookAPI) => setBooks(res.items));
    }

    getRecipes();
  }, []);

  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <Row justify="center" align="middle">
            <Col span={24}>
              <Text type="danger" className="header-title">
                <FileSearchOutlined />
                {'  '}
                Books Finder
              </Text>
            </Col>
          </Row>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Books</Breadcrumb.Item>
          </Breadcrumb>

          <div className="site-layout-content">
            <Divider orientation="center">
              <Title level={3}>
                Search
              </Title>
            </Divider>

            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                filters
              </Col>
            </Row>

            <Divider orientation="center">
              <Title level={3}>
                Results
              </Title>
            </Divider>

            <Row gutter={[16, 16]}>
              {books.map((book) => (
                <Col key={book.id} className="gutter-row" xs={24} sm={24} md={24} lg={12} xl={8}>
                  <Card
                    title={book.volumeInfo.title}
                    extra={<a href={book.volumeInfo.previewLink} rel="noreferrer" target="_blank">Buy</a>}
                  >
                    <Row gutter={16}>
                      <Col className="gutter-row" span={12}>
                        <img
                          alt={book.volumeInfo.imageLinks.thumbnail}
                          src={book.volumeInfo.imageLinks.thumbnail}
                        />
                      </Col>
                      <Col className="gutter-row" span={12}>
                        <Text>
                          Authors:
                          {' '}
                          {book.volumeInfo.authors}
                        </Text>
                        <Text>
                          Categories:
                          {' '}
                          {book.volumeInfo.categories}
                        </Text>
                        <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
                          Description:
                          {' '}
                          {book.volumeInfo.description}
                        </Paragraph>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          BooksFinder @
          {currentYear}
          {' '}
          created by
          {' '}
          <Link href="https://github.com/alexisinwork?tab=repositories" target="_blank">alexito</Link>
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
