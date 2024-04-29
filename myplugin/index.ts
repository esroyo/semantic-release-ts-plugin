import { VerifyConditionsContext } from 'semantic-release';

export default {
    async verifyConditions(
        pluginConfig: object,
        context: VerifyConditionsContext,
    ): Promise<void> {
        throw new Error('POTATO');
    },
};
