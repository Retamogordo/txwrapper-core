import {
	Args,
	BaseTxInfo,
	defineMethod,
	OptionsWithMeta,
	UnsignedTransaction,
} from '@substrate/txwrapper-core';

export interface StartTrainingJobArgs extends Args {
	/**
	 */
	jobId: number;
//    job_id: {"name":"jobId","type":"u32","typeName":"JobId"};
	/**
	 */
    requiredAccuracy: number;
    deadline?: number;
}

/**
 * Construct a balance transfer transaction offline.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function startTrainingJob(
	args: StartTrainingJobArgs,
	info: BaseTxInfo,
	options: OptionsWithMeta
): UnsignedTransaction {
	return defineMethod(
		{
			method: {
				args,
				name: 'startTrainingJob',
				pallet: 'trainingNodeInterface',
			},
			...info,
		},
		options
	);
}
