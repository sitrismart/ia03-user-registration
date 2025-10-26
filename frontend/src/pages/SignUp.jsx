import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../api/userApi';

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const mutation = useMutation({
    mutationFn: registerUser,
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <input
          {...register('email', { required: 'Email is required' })}
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          {...register('password', { required: 'Password is required' })}
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          {mutation.isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>

      {mutation.isSuccess && <p className="text-green-500 mt-2">Registration successful!</p>}
      {mutation.isError && <p className="text-red-500 mt-2">Error: {mutation.error.message}</p>}
    </div>
  );
}
