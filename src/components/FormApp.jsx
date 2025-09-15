import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography } from '@mui/material';
import schema from '../validations/formAppSchema';

export default function FormApp() {
  const [sent, setSent] = useState(false);

  const {register, handleSubmit, reset, formState: {errors, isSubmitting}, control} = useForm({
    defaultValues: {
      name: '',
      email: '',
      title: '',
      message: '',
      agreement: false,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    //ここでAPI送信などを実装(現在は疑似送信)
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSent(true);
    reset();
  };

  return (
    <Container component="form" maxWidth="sm" onSubmit={handleSubmit(onSubmit)} onChange={() => sent && setSent(false)} noValidate sx={{my: 2}}>
      {sent &&
        <Box role="status" aria-live="polite">
          <Typography sx={{color: 'success.main'}}>お問い合わせありがとうございます。内容を確認後、担当者よりご連絡いたします。</Typography>
        </Box>}
        
        <TextField
          id="name"
          label="お名前"
          autoComplete="name"
          placeholder="山田 太郎"
          error={!!errors.name}
          helperText={errors.name?.message}
          fullWidth
          margin="none"
          slotProps={{
            formHelperText: {sx: {fontSize: 14}},
            inputLabel: {shrink: true}
          }}
          sx={{my: 2}}
          {...register('name')}
        />
        
        <TextField
          id="email"
          label="メールアドレス"
          autoComplete="email"
          placeholder="taro@example.com"
          type="email"          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
          margin="none"
          slotProps={{
            formHelperText: {sx: {fontSize: 14}},
            inputLabel: {shrink: true}
          }}
          sx={{my: 2}}
          {...register('email')}
        />
        
        <TextField
          id="title"
          label="件名"
          autoComplete="off"
          placeholder="お問い合わせの件名"
          error={!!errors.title}
          helperText={errors.title?.message}
          fullWidth
          margin="none"
          slotProps={{
            formHelperText: {sx: {fontSize: 14}},
            inputLabel: {shrink: true}
          }}
          sx={{my: 2}}
          {...register('title')}
        />
        
        <TextField
          id="message"
          label="本文"
          autoComplete="off"
          placeholder="お問い合わせ内容をご記入ください"
          multiline
          rows={5}
          error={!!errors.message}
          helperText={errors.message?.message}
          fullWidth
          margin="none"
          slotProps={{
            formHelperText: {sx: {fontSize: 14}},
            inputLabel: {shrink: true}
          }}
          sx={{my: 2}}
          {...register('message')}
        />
        
        <Controller
          name="agreement"
          control={control}          defaultValue={false}
          render={({field}) => (
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  id="agreement"
                  checked={!!field.value}
                  onChange={e => field.onChange(e.target.checked)}
                  sx={{py: 0}}
                />
              }
              label="プライバシーポリシーに同意する"
              sx={{display: 'block', mt: 2, mb: errors.agreement ? 0 : 2}}
            />
          )}
        />
        {errors.agreement && (
          <Box sx={{color: 'error.main', fontSize: 14, ml: 2, mb: 2}}>{errors.agreement.message}</Box>
        )}
        
        <Button type="submit" variant="contained" sx={{my: 2}} disabled={isSubmitting}>
          {isSubmitting ? '送信中…' : '送信'}
        </Button>
    </Container>
  );
}