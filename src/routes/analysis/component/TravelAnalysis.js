import React from "react";
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

const TravelAnalysis = () => {
    return (
        <div className="content c-white">
            <PowerBIEmbed
                embedConfig={{
                    type: "report", // Supported types: report, dashboard, tile, visual and qna
                    id: "f1d7775f-6ad2-4df2-aa84-f946db9bfa5b",
                    embedUrl:
                        "https://app.powerbi.com/reportEmbed?reportId=f1d7775f-6ad2-4df2-aa84-f946db9bfa5b&groupId=6d1e625f-3017-4b96-ae2e-f2a6f4831a0f&",
                    accessToken:
                    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMWU5YjE5MjMtOThlYS00ZjY2LTlkOTMtOGI5MDMyYWRjMjEzLyIsImlhdCI6MTYzOTM4MDUwNCwibmJmIjoxNjM5MzgwNTA0LCJleHAiOjE2MzkzODU5ODksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUF1bWpnWjVjZUxJbFF3VnVtL2kzUmhDNUZhSDdjeCsxOWlURUQza0ZobjBhT2VLQnNkM0VKY1RWZXJOM0JDTEJYIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoicyIsImdpdmVuX25hbWUiOiJzYWxhaW11bmlzZWx2YW0iLCJpcGFkZHIiOiIxMTcuMjIxLjE0LjQ3IiwibmFtZSI6InNhbGFpbXVuaXNlbHZhbSBzIiwib2lkIjoiM2ZhYzMxZWItN2NhMi00YzdkLTg3NjktZDcxMTFmNmVmYjU0IiwicHVpZCI6IjEwMDMyMDAxQTRBOTdDQkYiLCJyaCI6IjAuQVNvQUl4bWJIdXFZWmstZGs0dVFNcTNDRXc4QkhJZGhYckZQZzZ5WVlRcC1rUkFxQUFVLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6InhQWS1nTTdEZ2lpNDF5SkVzeWxOcDZqNk9sUlZMQkZzOWNjc3BlNWh5NWsiLCJ0aWQiOiIxZTliMTkyMy05OGVhLTRmNjYtOWQ5My04YjkwMzJhZGMyMTMiLCJ1bmlxdWVfbmFtZSI6InNhbGFpbXVuaXNlbHZhbXNAZ2Vha21pbmRzLmNvbSIsInVwbiI6InNhbGFpbXVuaXNlbHZhbXNAZ2Vha21pbmRzLmNvbSIsInV0aSI6Inh2UHpScDNTR2syc1lsRkVJRVNCQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.oxNb-u8K6eDLi1xGXb58C7NMGvxHvxHysSiGwcBZOwr6spxBLLNULK8L9TPETtXWx09nAcaA2sS9lnjXh2bqyZG6ZWVAmre829e7VZMh10VxMsK-Nh1JG3BP77Nm1aGlNljR-Holr2yKUddWvWaQZeevQu0aLk115Ez4yns_2oZycN1iE7nV4Tmun24SYpLN4GE_a6hPYFneiXl09M2yOfPFbYogHNHzOPFIlPPR7lDoTdkerWZa_8zDBGt6akQDYWuj_RzYX-oDdW1RhreMUUth_WyqdGp1AuRoOcrIqPXfqk4CqcssKMz1QGs8vh9g7-SJnA4M2HnyXHHq5-wChA',
                    tokenType: models.TokenType.Aad,
                    settings: {
                        panes: {
                            filters: {
                                expanded: false,
                                visible: false,
                            },
                        },
                        background: models.BackgroundType.Transparent,
                    },
                }}
                eventHandlers={
                    new Map([
                        [
                            "loaded",
                            function () {
                                console.log("Report loaded");
                            },
                        ],
                        [
                            "rendered",
                            function () {
                                console.log("Report rendered");
                            },
                        ],
                        [
                            "error",
                            function (event) {
                                console.log('error',event.detail.message);
                            },
                        ],
                    ])
                }
                cssClassName={"report-style-class"}
                getEmbeddedComponent={(embeddedReport) => {
                    window.report = embeddedReport;
                }}
            />
        </div>
    );
}

export default TravelAnalysis;