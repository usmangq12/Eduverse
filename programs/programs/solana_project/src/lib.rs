use anchor_lang::prelude::*;

declare_id!("9WWxeF1Emr5qfwdwxBa9NCbTawZSf773Ld2PLJf4U33E");

#[program]
pub mod solana_project {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
