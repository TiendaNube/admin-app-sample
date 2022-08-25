# Page Component

## Properties

| property    |      type      |  default |
|-------------|:--------------:|---------:|
| width       | large, medium, small | medium |
| header      |    ReactNode   | |
| childen     | React.ReactNode| |


Sample
```tsx
   <Page
      width="medium"
      header={<Page.Header title={<Logo height={40} />} actions={actions} />}
    >
      <Stack column align="stretch">
        <List />
      </Stack>
    </Page>
```