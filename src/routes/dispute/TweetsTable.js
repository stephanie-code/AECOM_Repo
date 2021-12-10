import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table } from "antd";
import { useSelector } from 'react-redux'

function TweetsTable() {
    let path
    const [state, setstate] = useState([]);
    const [link, setLink] = useState('');
    const [loading, setloading] = useState(true);
    const keywordSelected = useSelector((state) => state.TweetKeyword.Keyword)

    useEffect(() => {
        if (keywordSelected === "Title 1" || keywordSelected == 'Title 5' || keywordSelected == 'Title 11' || keywordSelected == 'Title 16' || keywordSelected == 'Title 18') {
            console.log('if1')
            path = 'https://jsonplaceholder.typicode.com/comments?postId=1'
        } else if (keywordSelected == 'Title 2' || keywordSelected == 'Title 6' || keywordSelected == 'Title 17' || keywordSelected == 'Title 12' || keywordSelected == 'Title 19') {
            path = 'https://jsonplaceholder.typicode.com/comments?postId=2'
        }else if (keywordSelected == 'Title 3' || keywordSelected == 'Title 7' || keywordSelected == 'Title 13' || keywordSelected == 'Title 14' || keywordSelected == 'Title 20') {
            path = 'https://jsonplaceholder.typicode.com/comments?postId=3'
        } else {
            path = 'https://jsonplaceholder.typicode.com/comments'
        }
        setLink(path)
    }, [keywordSelected]);

    useEffect(() => {
        getURL()
    }, [link]);

    const getURL = async () => {
        await Axios.get(link).then(
            res => {
                setloading(false);
                setstate(
                    res.data.map(row => ({
                        body: row.body,
                        Name: row.name,
                        Email: row.email,
                        postId: row.postId
                    }))
                );
            }
        );
    }

    const columns = [
        {
            title: "Body",
            dataIndex: "body",
            width: 150,
        },
        {
            title: "Post ID",
            dataIndex: "postId",
            width: 20
        },
        {
            title: "Name",
            dataIndex: "Name",
            width: 50
        },
        {
            title: "Email",
            dataIndex: "Email",
            width: 50
        }
    ];
    // console.log('keywordSelected', keywordSelected)
    return (
        <div>
            {loading ? (
                "Loading"
            ) : (
                <Table
                    columns={columns}
                    dataSource={state}
                    pagination={{ pageSize: 50 }}
                    scroll={{ y: 240 }}
                />
            )}
        </div>
    );
}

export default TweetsTable;
