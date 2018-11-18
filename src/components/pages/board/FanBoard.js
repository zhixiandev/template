import React, { Component } from 'react';
import { Table, TableBody, TableHead  } from 'mdbreact';
import { Fa, FormInline, NavLink } from "mdbreact";
import { Card, CardBody } from "mdbreact";
import { Breadcrumb, BreadcrumbItem, Button } from 'mdbreact';

class FanBoard extends Component {
      render() {
        return(
          <React.Fragment>
            <Card className="mb-5">
              <CardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
                <Breadcrumb>
                    <BreadcrumbItem active>커뮤니티</BreadcrumbItem>
                    <BreadcrumbItem>팬게시판</BreadcrumbItem>
                    <BreadcrumbItem>DB</BreadcrumbItem>
                </Breadcrumb>
                <FormInline className="md-form m-0">
                    <input className="form-control form-control-sm" type="search" placeholder="검색하기" aria-label="Search"/>
                    <Button size="sm" color="primary" className="my-0" type="submit" href="#"><Fa icon="search" /></Button>
                </FormInline>
              </CardBody>
                    <Card className="mb-5">
                          <FormInline>
                            <NavLink to = "/board/fan/1" className="fbd_tname">
                            <img src="https://thumb.named.com/normal/resize/72x45/sports/basketball/team/215.png" width="50px" height="50px"></img><br/>DB</NavLink>
                            <NavLink to = "/board/fan/2" className="fbd_tname">
                            <img src="https://thumb.named.com/normal/resize/72x45/sports/basketball/team/212.png" width="50px" height="50px"></img><br/>삼성</NavLink>
                            <NavLink to = "/board/fan/3" className="fbd_tname">
                            <img src="https://thumb.named.com/normal/resize/72x45/sports/basketball/team/211.png" width="50px" height="50px"></img><br/>SK</NavLink>
                            <NavLink to = "/board/fan/4" className="fbd_tname">
                            <img src="https://thumb.named.com/normal/resize/72x45/sports/basketball/team/218.png" width="50px" height="50px"></img><br/>LG</NavLink>
                            <NavLink to = "/board/fan/5" className="fbd_tname">
                            <img src="https://thumb.named.com/normal/resize/72x45/sports/basketball/team/209.png" width="50px" height="50px"></img><br/>오리온스</NavLink>
                            <NavLink to = "/board/fan/6" className="fbd_tname">
                            <img src="https://thumb.named.com/normal/resize/72x45/sports/basketball/team/216.png" width="50px" height="50px"></img><br/>전자랜드</NavLink>
                            <NavLink to = "/board/fan/7" className="fbd_tname">
                            <img src="https://thumb.named.com/normal/resize/72x45/sports/basketball/team/217.png" width="50px" height="50px"></img><br/>KCC</NavLink>
                            <NavLink to = "/board/fan/8" className="fbd_tname">
                            <img src="https://thumb.named.com/normal/resize/72x45/sports/basketball/team/213.png" width="50px" height="50px"></img><br/>KGC</NavLink>
                            <NavLink to = "/board/fan/9" className="fbd_tname">
                            <img src="https://thumb.named.com/normal/resize/72x45/sports/basketball/team/210.png" width="50px" height="50px"></img><br/>KT</NavLink>
                            <NavLink to = "/board/fan/10" className="fbd_tname">
                            <img src="https://thumb.named.com/normal/resize/72x45/sports/basketball/team/214.png" width="50px" height="50px"></img><br/>모비스</NavLink>
                          </FormInline>
                          <Breadcrumb>
                              <Button color="grey" className="boardbtn_all" type="submit" href="/board/fan">전체</Button>
                              <Button color="red" className="boardbtn_best" type="submit" href="#">베스트</Button>           
                              <Button color="primary" className="board-write" type="submit" href="#">글쓰기</Button>
                          </Breadcrumb>
                            <Table>
                            <TableHead color="blue-grey lighten-4">
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>닉네임</th>
                                    <th>작성일</th>
                                    <th>조회수</th>
                                    <th>추천</th>
                                </tr>
                            </TableHead>
                            <TableBody>
                                <tr>
                                <td>1</td>
                                <td><a>test</a></td>
                                <td>Mark</td>
                                <td>@date</td>
                                <td>1</td>
                                <td>1</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td><a>test</a></td>
                                <td>Jacob</td>
                                <td>@date</td>
                                <td>1</td>
                                <td>1</td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td><a>test</a></td>
                                <td>Larry</td>
                                <td>@date</td>
                                <td>1</td>
                                <td>1</td>
                                </tr>
                            </TableBody>
                            </Table>
                        </Card>
                </Card>
          </React.Fragment>
        );
      }
}
export default FanBoard;