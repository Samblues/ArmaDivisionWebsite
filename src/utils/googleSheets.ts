export const fetchRulesData = async () => {
  // Replace with your published Google Sheet ID and tab name
  const SHEET_ID = '1lqJ3bzeerLval_X3b4qJfMYo_NI2KKLhpJSLdJ8F3Cg';
  const TAB_NAME = 'Rules';
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${TAB_NAME}`;

  try {
    const response = await fetch(url);
    const text = await response.text();
    const data = JSON.parse(text.substring(47).slice(0, -2));
    return data.table.rows.map((row: any) => ({
      section: row.c[0]?.v,
      title: row.c[1]?.v,
      content: row.c[2]?.v,
    }));
  } catch (error) {
    console.error('Error fetching rules:', error);
    return null;
  }
}; 