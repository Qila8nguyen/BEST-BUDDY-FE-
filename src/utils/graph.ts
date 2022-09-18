import {
  DefaultContext,
  DocumentNode,
  MutationFunctionOptions,
  MutationHookOptions,
  MutationTuple,
  OperationVariables,
  TypedDocumentNode,
  useMutation,
} from '@apollo/client'
import { useState } from 'react'

export const useLazyMutate = (
  mutation: DocumentNode | TypedDocumentNode,
  options?: MutationHookOptions,
): MutationTuple<any, OperationVariables> => {
  const { context } = options || {}
  const [subLoading, setSubLoading] = useState(false)
  const funcWithTracker = async (options?: MutationFunctionOptions) => {
    return func(options)
  }
  const [func, data] = useMutation(mutation, {
    ...options,
    context: {
      ...context,
      headers: { ...context?.headers },
    } as DefaultContext,
  })
  return [funcWithTracker, { ...data, loading: subLoading || data.loading }]
}
