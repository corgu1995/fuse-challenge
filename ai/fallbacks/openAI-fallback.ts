import { openAI } from '../clients/openAI';

type Messages = Parameters<
  typeof openAI.chat.completions.create
>[0]['messages'];
type Functions = Parameters<
  typeof openAI.chat.completions.create
>[0]['functions'];
type FunctionCall = Parameters<
  typeof openAI.chat.completions.create
>[0]['function_call'];

export const openAICompletionsCallWithFallback = async ({
  function_call,
  functions,
  messages,
}: {
  messages: Messages;
  function_call: FunctionCall;
  functions: Functions;
}) => {
  try {
    return openAI.chat.completions.create({
      model: 'gpt-4-1106-preview',
      function_call,
      functions,
      messages,
    });
  } catch (gpt4PreviewError) {
    console.error(
      new Error(
        'Continuing to gpt4 base, Error with gpt preview model: ',
        gpt4PreviewError,
      ),
    );

    try {
      return openAI.chat.completions.create({
        model: 'gpt-4',
        function_call,
        functions,
        messages,
      });
    } catch (gpt4err) {
      console.error(new Error('Error with gpt-4 model'));
      throw gpt4err;
    }
  }
};
