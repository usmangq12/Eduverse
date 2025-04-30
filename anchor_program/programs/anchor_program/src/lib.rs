use anchor_lang::prelude::*;

declare_id!("6eV3UZFd9oRyUhvMu6CQ6xt9PiVLzrRvU1ZsLtqLjbJp");

#[program]
pub mod anchor_program {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
