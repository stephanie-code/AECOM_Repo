import React from 'react';
import {models} from 'powerbi-client';
import {PowerBIEmbed} from 'powerbi-client-react';

// Bootstrap config
let embedConfigTest = {
  type: 'report', // Supported types: report, dashboard, tile, visual and qna
  id: '3bf0435f-ea86-4ffa-ae34-b67efd17f593',
  embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=3bf0435f-ea86-4ffa-ae34-b67efd17f593&autoAuth=true&ctid=1e9b1923-98ea-4f66-9d93-8b9032adc213&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWluZGlhLXdlc3QtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D',
  accessToken: null,
  tokenType: models.TokenType.Embed,
  pageView: 'fitToWidth',
  settings: {
    panes: {
      filters: {
        expanded: false,
        visible: false,
      },
    },
    background: models.BackgroundType.Transparent,
  },
};
let EXPIRED_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMWU5YjE5MjMtOThlYS00ZjY2LTlkOTMtOGI5MDMyYWRjMjEzLyIsImlhdCI6MTYzOTM4MDUwNCwibmJmIjoxNjM5MzgwNTA0LCJleHAiOjE2MzkzODU5ODksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUF1bWpnWjVjZUxJbFF3VnVtL2kzUmhDNUZhSDdjeCsxOWlURUQza0ZobjBhT2VLQnNkM0VKY1RWZXJOM0JDTEJYIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoicyIsImdpdmVuX25hbWUiOiJzYWxhaW11bmlzZWx2YW0iLCJpcGFkZHIiOiIxMTcuMjIxLjE0LjQ3IiwibmFtZSI6InNhbGFpbXVuaXNlbHZhbSBzIiwib2lkIjoiM2ZhYzMxZWItN2NhMi00YzdkLTg3NjktZDcxMTFmNmVmYjU0IiwicHVpZCI6IjEwMDMyMDAxQTRBOTdDQkYiLCJyaCI6IjAuQVNvQUl4bWJIdXFZWmstZGs0dVFNcTNDRXc4QkhJZGhYckZQZzZ5WVlRcC1rUkFxQUFVLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6InhQWS1nTTdEZ2lpNDF5SkVzeWxOcDZqNk9sUlZMQkZzOWNjc3BlNWh5NWsiLCJ0aWQiOiIxZTliMTkyMy05OGVhLTRmNjYtOWQ5My04YjkwMzJhZGMyMTMiLCJ1bmlxdWVfbmFtZSI6InNhbGFpbXVuaXNlbHZhbXNAZ2Vha21pbmRzLmNvbSIsInVwbiI6InNhbGFpbXVuaXNlbHZhbXNAZ2Vha21pbmRzLmNvbSIsInV0aSI6Inh2UHpScDNTR2syc1lsRkVJRVNCQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.oxNb-u8K6eDLi1xGXb58C7NMGvxHvxHysSiGwcBZOwr6spxBLLNULK8L9TPETtXWx09nAcaA2sS9lnjXh2bqyZG6ZWVAmre829e7VZMh10VxMsK-Nh1JG3BP77Nm1aGlNljR-Holr2yKUddWvWaQZeevQu0aLk115Ez4yns_2oZycN1iE7nV4Tmun24SYpLN4GE_a6hPYFneiXl09M2yOfPFbYogHNHzOPFIlPPR7lDoTdkerWZa_8zDBGt6akQDYWuj_RzYX-oDdW1RhreMUUth_WyqdGp1AuRoOcrIqPXfqk4CqcssKMz1QGs8vh9g7-SJnA4M2HnyXHHq5-wChA'
let NEW_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMWU5YjE5MjMtOThlYS00ZjY2LTlkOTMtOGI5MDMyYWRjMjEzLyIsImlhdCI6MTYzOTM4MDUwNCwibmJmIjoxNjM5MzgwNTA0LCJleHAiOjE2MzkzODU5ODksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUF1bWpnWjVjZUxJbFF3VnVtL2kzUmhDNUZhSDdjeCsxOWlURUQza0ZobjBhT2VLQnNkM0VKY1RWZXJOM0JDTEJYIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoicyIsImdpdmVuX25hbWUiOiJzYWxhaW11bmlzZWx2YW0iLCJpcGFkZHIiOiIxMTcuMjIxLjE0LjQ3IiwibmFtZSI6InNhbGFpbXVuaXNlbHZhbSBzIiwib2lkIjoiM2ZhYzMxZWItN2NhMi00YzdkLTg3NjktZDcxMTFmNmVmYjU0IiwicHVpZCI6IjEwMDMyMDAxQTRBOTdDQkYiLCJyaCI6IjAuQVNvQUl4bWJIdXFZWmstZGs0dVFNcTNDRXc4QkhJZGhYckZQZzZ5WVlRcC1rUkFxQUFVLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6InhQWS1nTTdEZ2lpNDF5SkVzeWxOcDZqNk9sUlZMQkZzOWNjc3BlNWh5NWsiLCJ0aWQiOiIxZTliMTkyMy05OGVhLTRmNjYtOWQ5My04YjkwMzJhZGMyMTMiLCJ1bmlxdWVfbmFtZSI6InNhbGFpbXVuaXNlbHZhbXNAZ2Vha21pbmRzLmNvbSIsInVwbiI6InNhbGFpbXVuaXNlbHZhbXNAZ2Vha21pbmRzLmNvbSIsInV0aSI6Inh2UHpScDNTR2syc1lsRkVJRVNCQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.oxNb-u8K6eDLi1xGXb58C7NMGvxHvxHysSiGwcBZOwr6spxBLLNULK8L9TPETtXWx09nAcaA2sS9lnjXh2bqyZG6ZWVAmre829e7VZMh10VxMsK-Nh1JG3BP77Nm1aGlNljR-Holr2yKUddWvWaQZeevQu0aLk115Ez4yns_2oZycN1iE7nV4Tmun24SYpLN4GE_a6hPYFneiXl09M2yOfPFbYogHNHzOPFIlPPR7lDoTdkerWZa_8zDBGt6akQDYWuj_RzYX-oDdW1RhreMUUth_WyqdGp1AuRoOcrIqPXfqk4CqcssKMz1QGs8vh9g7-SJnA4M2HnyXHHq5-wChA'
const PowerBiReport = ({graphName, ...props}) => {
  let [embedToken, setEmbedToken] = React.useState();
  let [embedConfig, setEmbedConfig] = React.useState(embedConfigTest);

  React.useEffect(
    () => {
      setEmbedToken(EXPIRED_TOKEN);
      setEmbedConfig({
        ...embedConfig,
        accessToken: EXPIRED_TOKEN, // Initiate with known expired token
      });
    },
    [graphName]
  );

  const changeSettings = (newToken) => {
    setEmbedConfig({
      ...embedConfig,
      accessToken: newToken, 
    });
  };

  // Map of event handlers to be applied to the embedding report
  const eventHandlersMap = new Map([
    [
      'loaded',
      function() {
        console.log('Report has loaded');
      },
    ],
    [
      'rendered',
      function() {
        console.log('Report has rendered');
      },
    ],
    [
      'error',
      async function(event, embed) {
        if (event) {
          console.error(event.detail);
          console.log(embed);
          // Simulate getting a new token and update
          // setEmbedToken(NEW_TOKEN);
          // changeSettings(NEW_TOKEN);
        }
      },
    ],
  ]);

  return (
    <PowerBIEmbed
      embedConfig={embedConfig}
      eventHandlers={eventHandlersMap}
      cssClassName={'report-style-class'}
    />
  );
};

export default PowerBiReport;