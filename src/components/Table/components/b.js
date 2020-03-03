<Form
  name="customized_form_controls"
  layout="inline"
  initialValues={{
    price: {
      number: 0,
      currency: 'rmb',
    },
  }}
>
  <Form.Item name="aa" label="名i在">
    <Input placeholder="请输入" />
  </Form.Item>
  <Form.Item>
    <Button type="primary" htmlType="submit">
      onClick=
      {() => {
        setIsSearch(true);
        submit();
      }}
      style={{ marginRight: '16px' }}> 搜索
    </Button>
    <Button onClick={reset}>重置</Button>
  </Form.Item>
</Form>;
