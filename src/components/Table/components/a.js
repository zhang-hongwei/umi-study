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
  <Form.Item name="price" label="Price">
    <PriceInput />
  </Form.Item>
  <Form.Item name="aa" label="名i在">
    <Input placeholder="请输入" />
  </Form.Item>
  <Form.Item>
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form.Item>
</Form>;
